module.exports = (suggestionDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const suggestions = await suggestionDB.getSuggestions(); 
    res.json(suggestions);
  });

  router.get('/:id', async (req, res) => {
    const suggestion = await suggestionDB.getSuggestion(req.params.id);
    res.json(suggestion);
  });

  router.post('/:id/signature', async (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const result = await suggestionDB.createSignature(id, username);
    res.json(result);
  });

  return router;
}
