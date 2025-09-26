import { GoogleGenAI, Type } from "@google/genai";
import type { SymptomAnalysisResult, OutbreakPredictionResult } from '../types.ts';

// FIX: Initialize the GoogleGenAI client according to guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeSymptoms = async (symptoms: string): Promise<SymptomAnalysisResult> => {
    const systemInstruction = `You are a helpful medical AI assistant. 
    Analyze the provided symptoms and return a preliminary analysis. 
    Your response must be in JSON format. Do not include any introductory text or markdown formatting. 
    The JSON object should strictly follow this schema:
    - possibleConditions: an array of objects, each with 'name' (string) and 'explanation' (string, a brief reason why this condition might fit).
    - suggestedNextSteps: an array of strings with recommended actions (e.g., "Consult a primary care physician," "Consider a blood test").
    - disclaimer: a mandatory string stating that this is not a medical diagnosis and a professional should be consulted.
    `;
    
    try {
        // FIX: Use the recommended ai.models.generateContent method with responseSchema.
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analyze these symptoms: ${symptoms}`,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        possibleConditions: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    name: { type: Type.STRING },
                                    explanation: { type: Type.STRING }
                                },
                                required: ['name', 'explanation']
                            }
                        },
                        suggestedNextSteps: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING
                            }
                        },
                        disclaimer: {
                            type: Type.STRING
                        }
                    },
                    required: ['possibleConditions', 'suggestedNextSteps', 'disclaimer']
                }
            },
        });
        
        // FIX: Access the generated text directly from the response.
        const text = response.text;
        if (!text) {
             throw new Error('Received an empty response from the AI.');
        }

        // The response text should be a valid JSON string based on the schema
        return JSON.parse(text) as SymptomAnalysisResult;

    } catch (error) {
        console.error("Error analyzing symptoms:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to get analysis from AI: ${error.message}`);
        }
        throw new Error('An unknown error occurred while communicating with the AI service.');
    }
};

export const predictOutbreak = async (regionalData: string, trendData: string): Promise<OutbreakPredictionResult> => {
    const systemInstruction = `You are an expert epidemiologist AI. Your task is to analyze public health data to predict potential disease outbreaks.
    Your response must be in JSON format. Do not include any introductory text or markdown formatting.
    The JSON object should strictly follow this schema:
    - prediction: a concise summary of your prediction (e.g., "A significant respiratory outbreak is likely").
    - confidence: your confidence level in this prediction ('High', 'Medium', or 'Low').
    - predictedDisease: the most likely disease causing the potential outbreak (e.g., "Influenza A", "COVID-19 variant").
    - predictedRegions: an array of region names that are at the highest risk.
    - rationale: a detailed explanation for your prediction, citing specific data points from the trends and regional information provided.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analyze the following public health data to predict potential outbreaks in the next 1-2 weeks.\n\nRegional Data (current week):\n${regionalData}\n\nSyndromic Surveillance Trends (last 7 weeks):\n${trendData}`,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        prediction: { type: Type.STRING },
                        confidence: { type: Type.STRING, enum: ['High', 'Medium', 'Low'] },
                        predictedDisease: { type: Type.STRING },
                        predictedRegions: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        },
                        rationale: { type: Type.STRING }
                    },
                    required: ['prediction', 'confidence', 'predictedDisease', 'predictedRegions', 'rationale']
                }
            },
        });

        const text = response.text;
        if (!text) {
             throw new Error('Received an empty response from the AI.');
        }

        return JSON.parse(text) as OutbreakPredictionResult;

    } catch (error) {
        console.error("Error predicting outbreak:", error);
         if (error instanceof Error) {
            throw new Error(`Failed to get prediction from AI: ${error.message}`);
        }
        throw new Error('An unknown error occurred while communicating with the AI service.');
    }
};