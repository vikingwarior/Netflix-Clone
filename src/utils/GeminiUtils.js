import { GoogleGenerativeAI } from "@google/generative-ai";

class GeminiUtils {
  #genAI;
  #model;

  constructor(API_KEY) {
    this.#genAI = new GoogleGenerativeAI(API_KEY);
    this.#model = this.#genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async getGeminiResponse(prompt) {
    const result = await this.#model.generateContent(prompt);
    const response = result.response;
    return response.text();
  }
}

export default GeminiUtils;