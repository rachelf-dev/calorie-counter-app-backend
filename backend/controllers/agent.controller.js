const agentService = require('../services/agent.service');

async function chat(req, res, next) {
  try {
    const { message, history } = req.body;

    const result = await agentService.runAgent({
      message,
      history: history || [],
      user: req.user,
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  chat,
};
