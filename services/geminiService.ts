

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// The API key is handled by the environment variable `process.env.API_KEY`.
// This function checks if the key is present.
export const isGeminiConfigured = (): boolean => {
  // This is a simplified check for client-side code.
  // In a real app, you would likely have a more robust way to manage this,
  // potentially checking a config object initialized at startup.
  // For this project, we assume the variable is either present or not.
  // A placeholder check as `process.env` is not directly available in browser like in Node.
  // We will rely on a placeholder value for the purpose of this exercise.
  // To use the actual API, replace this with a secure key management solution.
  return !!process.env.API_KEY;
};

let ai: GoogleGenAI | null = null;

// Initialize the GoogleGenAI client
const getGenAI = (): GoogleGenAI => {
    if (!ai) {
        if (!process.env.API_KEY) {
            console.error("API_KEY environment variable not set.");
            throw new Error("API_KEY environment variable not set.");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
}

export const analyzeSymptoms = async (symptoms: string): Promise<string> => {
    if (!isGeminiConfigured()) {
        console.error("Gemini API key not configured.");
        return "Gemini API is not configured. Please set the API_KEY environment variable.";
    }
    const genAI = getGenAI();

    const prompt = `Analyze the following patient symptoms and provide a brief, potential differential diagnosis, list possible next steps for investigation (like specific tests), and mention any red flag symptoms. Format the output clearly with sections. Do not provide a definitive diagnosis. This is for informational purposes for a medical professional. Symptoms: "${symptoms}"`;

    try {
        const response: GenerateContentResponse = await genAI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: "You are a helpful medical assistant providing preliminary analysis for healthcare professionals. Your insights are not a substitute for a doctor's diagnosis.",
                temperature: 0.5,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error analyzing symptoms with Gemini:", error);
        throw new Error("Failed to get analysis from Gemini API.");
    }
};