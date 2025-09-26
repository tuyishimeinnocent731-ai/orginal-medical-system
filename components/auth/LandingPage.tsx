import React from 'react';
import { BrainIcon, WorkflowIcon, HeartIcon } from '../IconComponents.tsx';
import ImageSlider from './ImageSlider.tsx';

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

const AnimatedText: React.FC<{ text: string; el: React.ElementType; className?: string; stagger?: number; [key: string]: any }> = ({ text, el: Component, className, stagger = 0.03, ...props }) => {
    const words = text.split(' ');
    return (
        <Component className={className} {...props}>
            {words.map((word, i) => (
                <span key={i} className="word-wrapper">
                    <span className="animate-word" style={{ animationDelay: `${i * stagger}s` }}>
                        {word}&nbsp;
                    </span>
                </span>
            ))}
        </Component>
    );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; delay: string }> = ({ icon, title, children, delay }) => (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50 opacity-0 animate-fade-in-up" style={{ animationDelay: delay }}>
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 text-blue-500 dark:text-blue-300 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{children}</p>
    </div>
);


const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToLogin, onNavigateToRegister }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background Shapes (subtle, behind image) */}
        <div className="absolute inset-0 w-full h-full z-0">
            <AnimatedShape className="w-72 h-72 bg-blue-300 dark:bg-blue-800 top-1/4 left-1/4 animate-float" animationDelay="0s" />
            <AnimatedShape className="w-64 h-64 bg-purple-300 dark:bg-purple-800 bottom-1/4 right-1/4 animate-float" animationDelay="2s" />
        </div>
        
        {/* Image Slider as background */}
        <ImageSlider />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <AnimatedText 
                el="h1" 
                text="Welcome to MediDash" 
                className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4" 
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }} 
            />
            <AnimatedText 
                el="p" 
                text="Revolutionizing healthcare through seamless management and AI-powered insights. Your all-in-one solution for superior patient care." 
                className="max-w-3xl text-lg md:text-xl mb-8" 
                stagger={0.02} 
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            />
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onNavigateToLogin}
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                    >
                        Get Easy Treatment
                    </button>
                    <button
                        onClick={onNavigateToRegister}
                        className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-opacity-50 transition-colors"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
      </div>

      <section className="py-20 px-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px">
              <svg width="100%" height="100" viewBox="0 0 800 100" preserveAspectRatio="none">
                  <path id="heartbeat-path" d="M0 50 L150 50 L180 20 L210 80 L240 50 L400 50 L420 70 L440 30 L460 50 L600 50 L630 20 L660 80 L690 50 L800 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
              </svg>
          </div>
          <div className="container mx-auto max-w-5xl text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>The Future of Hospital Management</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  MediDash integrates cutting-edge technology to provide a smarter, more efficient healthcare experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard icon={<BrainIcon className="w-6 h-6" />} title="AI-Powered Insights" delay="1.4s">
                      Leverage Gemini API for symptom analysis, readmission risk prediction, and clinical decision support.
                  </FeatureCard>
                  <FeatureCard icon={<WorkflowIcon className="w-6 h-6" />} title="Seamless Workflow" delay="1.6s">
                      From patient admission to billing, manage every aspect of your hospital from one centralized dashboard.
                  </FeatureCard>
                  <FeatureCard icon={<HeartIcon className="w-6 h-6" />} title="Comprehensive Care" delay="1.8s">
                      Track patient timelines, manage schedules, and monitor live vitals to deliver unparalleled patient care.
                  </FeatureCard>
              </div>
          </div>
      </section>

       <footer className="text-center py-8 px-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} MediDash. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default LandingPage;