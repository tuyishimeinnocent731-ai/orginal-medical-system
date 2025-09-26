
// FIX: Created this file to define the ConsultationRoom component.
import React from 'react';
import { SendIcon } from './IconComponents.tsx';

const ConsultationRoom: React.FC = () => {
    // This is a placeholder component for a video call UI
  return (
    <div className="animate-fade-in">
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Virtual Consultation Room</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">with Dr. Alice Carter</p>
      </header>
      <div className="flex h-[75vh] bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        {/* Main Video Area */}
        <main className="w-2/3 bg-black flex flex-col items-center justify-center text-white relative">
            <div className="absolute top-4 left-4 p-2 bg-gray-800/50 rounded-lg">
                <p className="font-semibold">Dr. Alice Carter</p>
            </div>
             <div className="absolute bottom-4 right-4 w-48 h-32 bg-gray-700 rounded-lg border-2 border-white">
                <p className="text-sm p-2">Your Video</p>
            </div>
            <p className="text-2xl">Video Feed Placeholder</p>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4">
                <button className="p-3 bg-gray-700 rounded-full">Mic</button>
                <button className="p-3 bg-gray-700 rounded-full">Cam</button>
                <button className="p-3 bg-red-600 rounded-full">End</button>
            </div>
        </main>
        {/* Chat/Info Sidebar */}
        <aside className="w-1/3 border-l dark:border-gray-700 flex flex-col">
          <div className="p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold">Chat</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
             <div className="flex justify-start">
                <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                    <p>Hello, how are you feeling today?</p>
                </div>
            </div>
             <div className="flex justify-end">
                <div className="p-3 rounded-lg bg-blue-500 text-white">
                    <p>I'm feeling a bit better, thanks for asking.</p>
                </div>
            </div>
          </div>
           <div className="p-4 border-t dark:border-gray-700 flex items-center">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
                />
                <button className="ml-3 p-3 rounded-full bg-blue-500 text-white">
                   <SendIcon className="w-5 h-5" />
                </button>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default ConsultationRoom;