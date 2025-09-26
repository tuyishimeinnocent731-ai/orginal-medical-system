
import { GoogleGenAI } from "@google/genai";

// As per guidelines, the API key must be sourced from `process.env.API_KEY`.
// The application assumes this environment variable is pre-configured and accessible.
const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const isGeminiConfigured = (): boolean => {
    return !!ai;
}

export const analyzeSymptoms = async (symptoms: string): Promise<string> => {
  if (!ai) {
    return "Gemini API is not configured. Please ensure the API_KEY is set in your environment variables.";
  }

  try {
    const prompt = `A user has reported the following symptoms: "${symptoms}". 
    Based on these symptoms, provide a brief, easy-to-understand potential analysis for a hospital dashboard interface.
    
    Structure the output as follows:
    1.  **Potential Conditions:** List a few possibilities.
    2.  **Severity Assessment:** Suggest whether they should seek immediate medical attention (e.g., visit an ER), schedule a doctor's visit, or if it seems non-urgent.
    3.  **Recommended Next Steps:** Provide some general advice.
    
    Include the following disclaimer at the very end: "Disclaimer: This is an AI-generated analysis for informational purposes only and is not a medical diagnosis. Consult a healthcare professional for any health concerns."`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful medical assistant providing preliminary information based on user-reported symptoms. Your analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Your tone should be helpful and cautious.",
        temperature: 0.5,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error analyzing symptoms with Gemini API:", error);
    return "An error occurred while analyzing symptoms. Please try again later or consult a healthcare professional directly.";
  }
};
