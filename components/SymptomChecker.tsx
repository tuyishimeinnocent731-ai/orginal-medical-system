
import React, { useState } from 'react';
// FIX: Created geminiService.ts to provide the analyzeSymptoms function.
import { analyzeSymptoms } from '../services/geminiService.ts';
// FIX: Created types.ts to define the SymptomAnalysisResult type.
import type { SymptomAnalysisResult } from '../types.ts';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
);

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState<string>('');
  const [analysis, setAnalysis] = useState<SymptomAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) {
      setError('Please enter symptoms before analyzing.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysis(null);
    try {
      const result = await analyzeSymptoms(symptoms);
      setAnalysis(result);
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError('An unknown error occurred.');
        }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">AI Symptom Checker</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">Enter patient symptoms for a preliminary AI-powered analysis.</p>
      </header>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-4">
        <label htmlFor="symptoms-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Patient Symptoms</label>
        <textarea
          id="symptoms-input"
          rows={5}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          placeholder="e.g., persistent cough for 2 weeks, low-grade fever, fatigue, and occasional shortness of breath..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 dark:disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? <LoadingSpinner /> : 'Analyze Symptoms'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900/50 dark:border-red-600 dark:text-red-300 p-4 rounded-md" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {analysis && (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white border-b dark:border-gray-700 pb-2">Analysis Results</h3>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Possible Conditions</h4>
            <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
              {analysis.possibleConditions.map((condition, index) => (
                <li key={index}>
                  <strong className="text-gray-800 dark:text-white">{condition.name}:</strong> {condition.explanation}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Suggested Next Steps</h4>
            <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              {analysis.suggestedNextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-600 p-4 rounded-md">
            <p className="font-bold">Disclaimer</p>
            <p className="text-sm">{analysis.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;