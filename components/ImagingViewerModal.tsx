
// FIX: Created a modal component for viewing medical imaging studies, allowing users to see a larger version of an image with its details.
import React from 'react';
import type { ImagingStudy } from '../types.ts';

interface ImagingViewerModalProps {
  imagingStudy: ImagingStudy;
  onClose: () => void;
}

const ImagingViewerModal: React.FC<ImagingViewerModalProps> = ({ imagingStudy, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl w-full max-w-3xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
          aria-label="Close image viewer"
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{imagingStudy.studyType} - {imagingStudy.bodyPart}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Patient: {imagingStudy.patientName} | Date: {imagingStudy.date}</p>
        </div>
        <div className="flex justify-center items-center bg-black rounded-lg">
          <img 
            src={imagingStudy.imageUrl} 
            alt={`${imagingStudy.studyType} of ${imagingStudy.bodyPart}`} 
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagingViewerModal;