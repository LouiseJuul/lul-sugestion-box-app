module.exports = (mongoose) => {
  const suggestionSchema = new mongoose.Schema({
    title: String,
    description: String,
    signatures: [{username:String, date:Date}]
  });

  const suggestionModel = mongoose.model("suggestions", suggestionSchema);

  async function getSuggestions() {
    try {
      return await suggestionModel.find();
    } catch (error) {
      console.error("getSuggestions:", error.message);
      return {};
    }
  }

  async function getSuggestion(id) {
    try {
      return await suggestionModel.findById(id);
    } catch (error) {
      console.error("getSuggestion:", error.message);
      return {};
    }
  }

  async function createSuggestion(title, desc) {
    const suggestion = new suggestionModel({
      title:title, 
      description: desc
    });
    return suggestion.save();
  }


  async function createSignature(id, username) {
    const date = Date.now();
    const newSignature = {username: username, date: date};
    const suggestion = await this.getSuggestion(id);

    // Add the signature to the suggestion
    console.log(suggestion);
    suggestion.signatures.push(newSignature);

    return suggestion.save();
  }

  async function bootstrap() {
    let l = (await getSuggestions()).length;
    console.log("Suggestion collection size:", l);

    if (l === 0) {
      this.createSuggestion("Sug 1", "desc 1");
      this.createSuggestion("Sug 2", "desc 2");
      this.createSuggestion("Sug 3", "desc 3");
      this.createSuggestion("Sug 4", "desc 4");
      this.createSuggestion("Sug 5", "desc 5");
    }
  }

  return {
    getSuggestion,
    getSuggestions,
    createSuggestion,
    createSignature,
    bootstrap
  }
}