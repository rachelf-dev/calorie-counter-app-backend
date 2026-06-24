const { GoogleGenAI } = require('@google/genai');

const { functionDeclarations, buildToolExecutors } = require('./agent.tools');

const MODEL = 'gemini-2.5-flash';
const MAX_TOOL_ITERATIONS = 5;

const SYSTEM_INSTRUCTION = `אתה עוזר AI לאפליקציית ספירת קלוריות.
תפקידך לעזור למשתמשים לנהל את יומן האכילה היומי, לחפש מוצרים, להוסיף או להסיר פריטים מהסל, וליצור או למחוק מוצרים פרטיים.
השתמש בכלים (tools) רק כאשר המשתמש מבקש לבצע פעולה במערכת או כשאתה צריך מידע מהמערכת.
לפני הוספת פריט לסל, חפש את המוצר אם אינך בטוח בשם המדויק או ביחידות המנה הזמינות.
ענה בעברית, בצורה קצרה, ידידותית וברורה.
לאחר ביצוע פעולה, סכם למשתמש מה נעשה.`;

let aiClient;

function getClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw Object.assign(new Error('Gemini API key is not configured'), { statusCode: 503 });
  }

  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }

  return aiClient;
}

function mapHistoryToContents(history = []) {
  return history
    .filter((entry) => entry?.content?.trim())
    .map((entry) => ({
      role: entry.role === 'agent' ? 'model' : 'user',
      parts: [{ text: entry.content.trim() }],
    }));
}

function buildInitialContents(message, history = []) {
  return [...mapHistoryToContents(history), { role: 'user', parts: [{ text: message.trim() }] }];
}

async function runAgent({ message, history = [], user }) {
  if (!message?.trim()) {
    throw Object.assign(new Error('Message is required'), { statusCode: 400 });
  }

  const ai = getClient();
  const executors = buildToolExecutors(user);
  const contents = buildInitialContents(message, history);
  const toolsUsed = [];

  let response;

  for (let iteration = 0; iteration < MAX_TOOL_ITERATIONS; iteration += 1) {
    response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ functionDeclarations }],
      },
    });

    const functionCalls = response.functionCalls;

    if (!functionCalls?.length) {
      break;
    }

    contents.push({
      role: 'model',
      parts: functionCalls.map((call) => ({ functionCall: call })),
    });

    const functionResponseParts = [];

    for (const call of functionCalls) {
      const executor = executors[call.name];

      let result;

      if (!executor) {
        result = { error: `Unknown tool: ${call.name}` };
      } else {
        try {
          result = await executor(call.args || {});
        } catch (error) {
          result = { error: error.message || `Failed to execute ${call.name}` };
        }
      }

      toolsUsed.push({
        name: call.name,
        status: result?.error ? 'error' : 'success',
        args: call.args,
        result,
      });

      functionResponseParts.push({
        functionResponse: {
          name: call.name,
          response: result,
        },
      });
    }

    contents.push({
      role: 'user',
      parts: functionResponseParts,
    });
  }

  return {
    reply: response?.text?.trim() || 'מצטער, לא הצלחתי להשיב. נסה שוב.',
    toolsUsed,
  };
}

module.exports = {
  runAgent,
};
