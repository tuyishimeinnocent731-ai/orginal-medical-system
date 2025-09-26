
import React from 'react';

interface LandingPageProps {
  onNavigateToLogin: () => void;
  onNavigateToRegister: () => void;
}

const AnimatedShape: React.FC<{ className: string; animationDelay: string }> = ({ className, animationDelay }) => (
    <div
        className={`absolute rounded-full filter blur-xl opacity-20 dark:opacity-30 mix-blend-multiply ${className}`}
        style={{ animationDelay }}
    />
);

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToLogin, onNavigateToRegister }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 w-full h-full z-0">
            <AnimatedShape className="w-72 h-72 bg-blue-300 dark:bg-blue-800 top-1/4 left-1/4 animate-float" animationDelay="0s" />
            <AnimatedShape className="w-64 h-64 bg-purple-300 dark:bg-purple-800 bottom-1/4 right-1/4 animate-float" animationDelay="2s" />
            <AnimatedShape className="w-48 h-48 bg-green-200 dark:bg-green-700 top-10 right-20 animate-float" animationDelay="4s" />
            <AnimatedShape className="w-56 h-56 bg-yellow-200 dark:bg-yellow-700 bottom-10 left-20 animate-float" animationDelay="6s" />
        </div>
      
      <div className="relative z-10 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">MediDash</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Revolutionizing healthcare through seamless management and AI-powered insights. Your all-in-one solution for superior patient care.
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onNavigateToLogin}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
              >
                Get Easy Treatment
              </button>
               <button
                onClick={onNavigateToRegister}
                className="px-8 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
              >
                Register
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;