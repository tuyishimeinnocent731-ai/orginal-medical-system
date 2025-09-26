// FIX: Created this file to house Gemini API interactions.
import { GoogleGenAI, Type } from "@google/genai";
import type { SymptomAnalysisResult } from '../types';

// FIX: Initialize GoogleGenAI with a named apiKey parameter from environment variables as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeSymptoms = async (symptoms: string): Promise<SymptomAnalysisResult> => {
    // FIX: Use the recommended 'gemini-2.5-flash' model.
    const model = 'gemini-2.5-flash';

    const prompt = `
        You are a medical analysis assistant for a healthcare professional.
        Analyze the following patient symptoms and provide a preliminary analysis based on the information given.
        Symptoms: "${symptoms}"
        
        Your response must be a valid JSON object that adheres to the provided schema.
        Do not include any text or markdown formatting before or after the JSON object.
    `;

    try {
        // FIX: Use ai.models.generateContent and request a JSON response using responseMimeType and a responseSchema.
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        possibleConditions: {
                            type: Type.ARRAY,
                            description: "A list of potential medical conditions based on the symptoms.",
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    name: { type: Type.STRING, description: "The name of the possible condition." },
                                    explanation: { type: Type.STRING, description: "A brief explanation of why this condition is possible." },
                                },
                                required: ["name", "explanation"]
                            }
                        },
                        suggestedNextSteps: {
                            type: Type.ARRAY,
                            description: "A list of suggested next steps, such as tests or consultations.",
                            items: {
                                type: Type.STRING
                            }
                        },
                        disclaimer: { 
                            type: Type.STRING, 
                            description: "A standard disclaimer about the AI-generated nature of the analysis."
                        }
                    },
                    required: ["possibleConditions", "suggestedNextSteps", "disclaimer"]
                }
            }
        });

        // FIX: Access the .text property directly to get the model's response string.
        const textResponse = response.text;
        
        if (!textResponse) {
             throw new Error('Received an empty response from the AI model.');
        }

        const parsedResult: SymptomAnalysisResult = JSON.parse(textResponse);
        
        // Add a default disclaimer if the model fails to provide one.
        if (!parsedResult.disclaimer) {
            parsedResult.disclaimer = "This is an AI-generated analysis and should not be used as a sole basis for diagnosis. Always consult with a qualified medical professional.";
        }
        
        return parsedResult;

    } catch (error) {
        console.error('Error analyzing symptoms with Gemini API:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to analyze symptoms: ${error.message}`);
        }
        throw new Error('An unknown error occurred while analyzing symptoms.');
    }
};
