
// FIX: Created this file to define the PatientTimeline component.
import React from 'react';
import type { TimelineEvent } from '../types.ts';

interface PatientTimelineProps {
  timeline?: TimelineEvent[];
}

const PatientTimeline: React.FC<PatientTimelineProps> = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Patient Timeline</h3>
        <p className="text-gray-500 dark:text-gray-400">No timeline events recorded.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Patient Timeline</h3>
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
        <ul className="space-y-8">
          {timeline.map((event, index) => (
            <li key={event.id} className="ml-8">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-800 dark:bg-blue-900">
                <svg className="w-5 h-5 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{event.title}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{event.type}</span>
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.date}</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientTimeline;