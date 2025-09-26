
import React, { useState, useEffect } from 'react';
import { analyzeSymptoms, isGeminiConfigured } from '../services/geminiService.ts';

const SymptomChecker: React.FC = () => {
    const [symptoms, setSymptoms] = useState('');
    const [analysis, setAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [configured, setConfigured] = useState(false);

    useEffect(() => {
        setConfigured(isGeminiConfigured());
    }, []);

    const handleAnalyze = async () => {
        if (!symptoms.trim()) {
            setError('Please enter symptoms before analyzing.');
            return;
        }
        setError('');
        setIsLoading(true);
        setAnalysis('');
        try {
            const result = await analyzeSymptoms(symptoms);
            setAnalysis(result);
        } catch (err) {
            setError('An unexpected error occurred.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!configured) {
        return (
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
                <h2 className="text-2xl font-bold mb-4">Symptom Checker</h2>
                 <p className="text-red-500 bg-red-100 dark:bg-red-900/50 p-4 rounded-lg">
                    Gemini API is not configured. Please set the `API_KEY` environment variable to use this feature.
                </p>
             </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">AI-Powered Symptom Checker</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Describe the patient's symptoms below. This tool provides preliminary insights and is not a substitute for professional medical advice.
            </p>
            <div className="space-y-4">
                <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="e.g., 'High fever for 3 days, persistent dry cough, and shortness of breath...'"
                    className="w-full h-32 p-3 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    disabled={isLoading}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    onClick={handleAnalyze}
                    disabled={isLoading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                    {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
                </button>
            </div>
            {isLoading && (
                 <div className="mt-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-500">AI is thinking...</p>
                 </div>
            )}
            {analysis && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Analysis Result</h3>
                    <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans">{analysis}</pre>
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;
