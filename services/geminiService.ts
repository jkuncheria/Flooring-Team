import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the "Flooring Team Smart Assistant". 
      You are an expert in interior design and flooring materials (Hardwood, Carpet, Tile, Luxury Vinyl, Laminate, Sheet Vinyl).
      Flooring Team Company is a full-service flooring company specializing in the installation of high-quality Hardwood, Laminate, Tile, Carpet and cabinetry.
      We are located at 2048 N 16th St, Phoenix, AZ 85006, serving with expert craftsmanship and reliable service.
      We offer free estimates and professional installation services.
      Your goal is to help customers choose the right flooring for their specific needs (pets, kids, moisture, budget).
      Keep answers concise, friendly, and encouraging.
      IMPORTANT: Write all responses in plain text only. Do NOT use markdown formatting like asterisks (*), bold symbols (**), bullet points, or any markdown syntax. Use simple, natural language with line breaks for readability. Format lists using simple line breaks, not markdown bullets.
      If asked about store location, mention we're located at 2048 N 16th St, Phoenix, AZ 85006.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to our design database. Please try again later.";
  }
};