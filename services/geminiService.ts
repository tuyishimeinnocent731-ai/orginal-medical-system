// FIX: Implemented the Gemini API service for symptom analysis, including client initialization, a JSON schema for structured responses, and robust error handling, adhering to the coding guidelines.
import { GoogleGenAI, Type } from "@google/genai";
import type { SymptomAnalysisResult } from '../types';

// FIX: Initialized the Gemini AI client.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// FIX: Implemented the analyzeSymptoms function to call the Gemini API.
export const analyzeSymptoms = async (symptoms: string): Promise<SymptomAnalysisResult> => {
  const prompt = `Analyze the following patient symptoms and provide a preliminary analysis. The symptoms are: "${symptoms}".`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            possibleConditions: {
              type: Type.ARRAY,
              description: "A list of 2-3 possible medical conditions based on the symptoms, with a brief explanation for each.",
              items: {
                type: Type.OBJECT,
                properties: {
                  name: {
                    type: Type.STRING,
                    description: "The name of the possible condition."
                  },
                  explanation: {
                    type: Type.STRING,
                    description: "A brief explanation of why this condition might match the symptoms."
                  }
                },
                required: ["name", "explanation"]
              }
            },
            suggestedNextSteps: {
              type: Type.ARRAY,
              description: "A list of 2-3 recommended next steps, such as specific tests or seeing a specialist.",
              items: {
                type: Type.STRING
              }
            },
            disclaimer: {
              type: Type.STRING,
              description: "A standard disclaimer that this is an AI analysis and not a substitute for professional medical advice. It should state: 'This is an AI-generated analysis and should not be considered a medical diagnosis. Consult with a qualified healthcare professional for any health concerns.'"
            }
          },
          required: ["possibleConditions", "suggestedNextSteps", "disclaimer"]
        },
      },
    });

    const jsonText = response.text.trim();
    // Gemini can sometimes wrap the JSON in markdown backticks
    const cleanedJsonText = jsonText.replace(/^```json\s*|```$/g, '');
    const result = JSON.parse(cleanedJsonText);
    
    return result as SymptomAnalysisResult;

  } catch (error) {
    console.error("Error analyzing symptoms with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to analyze symptoms. Gemini API error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while analyzing symptoms.');
  }
};
