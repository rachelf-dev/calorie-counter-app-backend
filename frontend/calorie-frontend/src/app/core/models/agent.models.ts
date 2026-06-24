export type ChatRole = 'user' | 'agent';

export type ChatMessageStatus = 'pending' | 'error';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: Date;
  status?: ChatMessageStatus;
  toolsUsed?: AgentToolExecution[];
}

export interface AgentToolExecution {
  name: string;
  status: 'success' | 'error';
  args?: unknown;
  result?: unknown;
}

export interface AgentChatHistoryItem {
  role: ChatRole;
  content: string;
}

export interface AgentChatRequest {
  message: string;
  history: AgentChatHistoryItem[];
}

export interface AgentChatResponse {
  reply: string;
  toolsUsed?: AgentToolExecution[];
}
