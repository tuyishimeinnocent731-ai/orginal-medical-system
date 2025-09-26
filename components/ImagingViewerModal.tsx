// FIX: Created this file to define the ImagingViewerModal component.
import React from 'react';

interface ImagingViewerModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagingViewerModal: React.FC<ImagingViewerModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <img src={imageUrl} alt="Medical imaging" className="max-w-full max-h-[85vh] object-contain" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
      </div>
    </div>
  );
};

export default ImagingViewerModal;
