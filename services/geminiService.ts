// FIX: Created this file to handle interactions with the Gemini API.
import { GoogleGenAI } from "@google/genai";

// FIX: Initialize GoogleGenAI with a named apiKey parameter as required.
// API key is sourced from environment variables for security.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Gets a preliminary symptom analysis from the Gemini model.
 * @param symptoms A string describing the patient's symptoms.
 * @returns A string containing the model's analysis.
 */
export const getSymptomAnalysis = async (symptoms: string): Promise<string> => {
  if (!symptoms || symptoms.trim() === '') {
    return "Please enter some symptoms to analyze.";
  }

  try {
    // FIX: A detailed prompt to guide the model's response for a medical context.
    const prompt = `
      Analyze the following symptoms for a preliminary assessment for a medical professional.
      This is for informational purposes and is NOT a diagnosis.
      Provide a list of 3-5 possible conditions, a brief explanation for each,
      and suggest whether the situation is likely non-urgent, requires a doctor's visit, or is a potential emergency.
      Keep the language clear and professional. Format the output in markdown.

      Symptoms: "${symptoms}"
    `;

    // FIX: Use ai.models.generateContent with the correct model and prompt structure as per guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    // FIX: Access the generated text directly from the response.text property.
    return response.text;
  } catch (error) {
    console.error("Error getting symptom analysis:", error);
    return "Sorry, there was an error communicating with the AI service. Please check your connection and API key, then try again.";
  }
};
