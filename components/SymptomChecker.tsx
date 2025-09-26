// FIX: Created this file to define the SymptomChecker component.
import React, { useState } from 'react';
import { getSymptomAnalysis } from '../services/geminiService.ts';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!symptoms.trim()) {
      setError('Please enter symptoms before analyzing.');
      return;
    }
    setError('');
    setIsLoading(true);
    setAnalysis('');
    try {
      const result = await getSymptomAnalysis(symptoms);
      setAnalysis(result);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">AI Symptom Checker</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
        Describe the symptoms, and our AI assistant will provide a preliminary analysis.
        <br />
        <strong className="text-red-500">This is not a medical diagnosis. Always consult a healthcare professional.</strong>
      </p>
      
      <div className="flex flex-col gap-4">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="e.g., 'High fever, persistent cough, and shortness of breath for the last 3 days.'"
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 h-32 resize-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors self-center"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
        </button>
      </div>
      
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {analysis && (
        <div className="mt-8 pt-6 border-t dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Analysis Result:</h3>
          <div className="prose dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
            {analysis.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
