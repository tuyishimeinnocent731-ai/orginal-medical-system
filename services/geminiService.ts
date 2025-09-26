// FIX: Created this file to house the Gemini API service interaction.
import { GoogleGenAI, Type } from "@google/genai";
import type { SymptomAnalysisResult } from '../types';

// FIX: Initialize the GoogleGenAI client according to guidelines.
// Ensure the API_KEY is available in the environment variables.
const ai = new GoogleGenAI({apiKey: process.env.API_KEY!});

// FIX: Define the response schema for symptom analysis to ensure structured JSON output.
const responseSchema = {
    type: Type.OBJECT,
    properties: {
        possibleConditions: {
            type: Type.ARRAY,
            description: "A list of possible medical conditions based on the symptoms.",
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: "The name of the possible condition." },
                    explanation: { type: Type.STRING, description: "A brief explanation of why this condition is possible." },
                },
                required: ['name', 'explanation'],
            },
        },
        suggestedNextSteps: {
            type: Type.ARRAY,
            description: "A list of suggested next steps for diagnosis or treatment.",
            items: { type: Type.STRING },
        },
        disclaimer: {
            type: Type.STRING,
            description: "A standard medical disclaimer."
        }
    },
    required: ['possibleConditions', 'suggestedNextSteps', 'disclaimer'],
};

export const analyzeSymptoms = async (symptoms: string): Promise<SymptomAnalysisResult> => {
    try {
        const prompt = `Analyze the following patient symptoms and provide a preliminary analysis. The patient reports: "${symptoms}". Based on these symptoms, list three possible conditions with a brief explanation for each, suggest three concrete next steps for a medical professional to consider (e.g., specific tests to order), and include a standard disclaimer that this is an AI-generated analysis for informational purposes only and not a substitute for professional medical advice.`;

        // FIX: Call the Gemini API to generate content with a JSON schema, following SDK guidelines.
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2, // Lower temperature for more deterministic clinical-style output
            },
        });

        // FIX: Extract and parse the JSON response text using the recommended `.text` property.
        const jsonText = response.text;
        const result = JSON.parse(jsonText);
        
        // Basic validation to ensure the result conforms to the SymptomAnalysisResult type
        if (
            !result.possibleConditions || 
            !result.suggestedNextSteps || 
            !result.disclaimer
        ) {
            throw new Error('Invalid analysis format received from AI.');
        }

        return result as SymptomAnalysisResult;
    } catch (error) {
        console.error("Error analyzing symptoms:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to get analysis from AI: ${error.message}`);
        }
        throw new Error("An unknown error occurred during symptom analysis.");
    }
};
