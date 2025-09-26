import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCard from './StatCard.tsx';
import { PublicHealthIcon } from './IconComponents.tsx';
import { mockRegionalHealthData, mockSyndromicTrends, mockOutbreakAlerts } from '../services/mockData.ts';
import type { OutbreakPredictionResult } from '../types.ts';
import { predictOutbreak } from '../services/geminiService.ts';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
        <div className="w-3 h-3 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
);


const PublicHealth: React.FC = () => {
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
    const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';

    const [isLoading, setIsLoading] = useState(false);
    const [prediction, setPrediction] = useState<OutbreakPredictionResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handlePredict = async () => {
        setIsLoading(true);
        setError(null);
        setPrediction(null);
        try {
            const result = await predictOutbreak(JSON.stringify(mockRegionalHealthData), JSON.stringify(mockSyndromicTrends));
            setPrediction(result);
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
    
    const getRiskColor = (riskIndex: number) => {
        if (riskIndex > 75) return 'fill-red-500/80';
        if (riskIndex > 50) return 'fill-orange-500/80';
        if (riskIndex > 25) return 'fill-yellow-500/80';
        return 'fill-green-500/80';
    };
    
    const regionPositions = {
        'North District': { x: 50, y: 50 },
        'Westside': { x: 50, y: 150 },
        'Downtown': { x: 150, y: 100 },
        'East Suburbs': { x: 250, y: 125 },
    };

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Public Health Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Epidemiological surveillance and AI-powered outbreak prediction.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Active Outbreak Alerts" value={mockOutbreakAlerts.length} icon={<PublicHealthIcon className="w-6 h-6 text-red-800" />} color="bg-red-100 dark:bg-red-900/50" />
        <StatCard title="Regional Vaccination Rate" value="82.5%" icon={<PublicHealthIcon className="w-6 h-6 text-green-800" />} color="bg-green-100 dark:bg-green-900/50" />
        <StatCard title="Air Quality Index (AQI)" value="45 (Good)" icon={<PublicHealthIcon className="w-6 h-6 text-blue-800" />} color="bg-blue-100 dark:bg-blue-900/50" />
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Community Health Risk Map</h3>
                 <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {mockRegionalHealthData.map(region => (
                        <g key={region.regionId} className="group">
                            <rect 
                                x={regionPositions[region.regionName as keyof typeof regionPositions].x} 
                                y={regionPositions[region.regionName as keyof typeof regionPositions].y} 
                                width="100" height="80" rx="8"
                                className={`${getRiskColor(region.riskIndex)} stroke-2 stroke-white dark:stroke-gray-800`}
                            />
                            <text 
                                x={regionPositions[region.regionName as keyof typeof regionPositions].x + 50} 
                                y={regionPositions[region.regionName as keyof typeof regionPositions].y + 40}
                                textAnchor="middle" dy=".3em" className="fill-white font-bold pointer-events-none"
                            >
                                {region.regionName}
                            </text>
                             <title>{`Risk: ${region.riskIndex}/100 | Resp. Cases: ${region.cases.respiratory}`}</title>
                        </g>
                    ))}
                </svg>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">AI Outbreak Prediction</h3>
                <div className="flex-grow space-y-4">
                     {!prediction && (
                        <div className="text-center p-4 bg-blue-50 dark:bg-gray-700/50 rounded-lg flex flex-col items-center justify-center h-full">
                           <p className="text-gray-600 dark:text-gray-300">Run AI analysis on current trends to forecast potential outbreaks.</p>
                        </div>
                    )}
                    {prediction && (
                        <div className="space-y-3 text-sm">
                            <p><strong className="dark:text-white">Prediction:</strong> {prediction.prediction}</p>
                            <p><strong className="dark:text-white">Confidence:</strong> {prediction.confidence}</p>
                            <p><strong className="dark:text-white">Predicted Disease:</strong> {prediction.predictedDisease}</p>
                            <p><strong className="dark:text-white">High-Risk Regions:</strong> {prediction.predictedRegions.join(', ')}</p>
                            <p className="pt-2 border-t dark:border-gray-700"><strong className="dark:text-white">Rationale:</strong> {prediction.rationale}</p>
                        </div>
                    )}
                    {error && <p className="text-red-500">{error}</p>}
                </div>
                 <button onClick={handlePredict} disabled={isLoading} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 dark:disabled:bg-blue-800">
                    {isLoading ? <LoadingSpinner /> : "Run AI Prediction"}
                </button>
            </div>
       </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Syndromic Surveillance Trends</h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={mockSyndromicTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false}/>
            <XAxis dataKey="date" tick={{ fill: tickColor }} />
            <YAxis tick={{ fill: tickColor }} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#fff', borderRadius: '0.5rem' }}/>
            <Legend />
            <Line type="monotone" dataKey="respiratory" stroke="#EF4444" strokeWidth={2} name="Respiratory" />
            <Line type="monotone" dataKey="gastrointestinal" stroke="#F59E0B" strokeWidth={2} name="Gastrointestinal" />
            <Line type="monotone" dataKey="fever" stroke="#8B5CF6" strokeWidth={2} name="Fever" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PublicHealth;