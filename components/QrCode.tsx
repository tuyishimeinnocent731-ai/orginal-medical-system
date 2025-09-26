// FIX: Created this file to define the QrCode component.
import React from 'react';

interface QrCodeProps {
  value: string;
  size?: number;
}

// In a real application, you would use a library like 'qrcode.react'
// For this mock, we'll just display a placeholder.
const QrCode: React.FC<QrCodeProps> = ({ value, size = 128 }) => {
  return (
    <div 
      style={{ width: size, height: size }}
      className="bg-gray-300 dark:bg-gray-600 flex items-center justify-center p-2 rounded-lg"
      title={`QR Code for: ${value}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 4v16m8-8H4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3.75 12H20.25" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 6h16M4 18h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M6 4v16m12-16v16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5h3v3H5zM16 5h3v3h-3zM5 16h3v3H5z" />
      </svg>
    </div>
  );
};

export default QrCode;
