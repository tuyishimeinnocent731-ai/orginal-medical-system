
import React, { useState, useEffect, useRef } from 'react';
// FIX: Created mockData.ts to provide mock chat data.
import { mockChatContacts, mockMessages } from '../services/mockData.ts';
// FIX: Created types.ts to define chat-related types.
import type { ChatContact, ChatMessage } from '../types.ts';
// FIX: Created IconComponents.tsx to provide the SendIcon.
import { SendIcon } from './IconComponents.tsx';

const Telemedicine: React.FC = () => {
    const [contacts] = useState<ChatContact[]>(mockChatContacts);
    const [selectedContact, setSelectedContact] = useState<ChatContact>(contacts[0]);
    const [messages, setMessages] = useState<ChatMessage[]>(mockMessages[selectedContact.id]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages(mockMessages[selectedContact.id] || []);
    }, [selectedContact]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const userMessage: ChatMessage = {
            id: `m${Date.now()}`,
            text: newMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setNewMessage('');

        // Simulate doctor's reply
        setTimeout(() => {
            const doctorReply: ChatMessage = {
                id: `m${Date.now() + 1}`,
                text: "Thank you for your message. I am reviewing it and will get back to you shortly.",
                sender: 'doctor',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, doctorReply]);
        }, 1500);
    };


    return (
        <div className="animate-fade-in">
             <header className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Telemedicine Portal</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Communicate directly with your healthcare providers.</p>
            </header>
            <div className="flex h-[75vh] bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                {/* Contacts List */}
                <aside className="w-1/3 border-r dark:border-gray-700 flex flex-col">
                    <div className="p-4 border-b dark:border-gray-700">
                        <h3 className="text-lg font-semibold">Contacts</h3>
                    </div>
                    <div className="overflow-y-auto">
                        {contacts.map(contact => (
                            <div
                                key={contact.id}
                                onClick={() => setSelectedContact(contact)}
                                className={`flex items-center p-4 cursor-pointer transition-colors ${selectedContact.id === contact.id ? 'bg-blue-50 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
                            >
                                <div className="relative">
                                    <img src={contact.avatarUrl} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                                    {contact.unreadCount > 0 && <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>}
                                </div>
                                <div className="ml-4 flex-1">
                                    <p className="font-semibold text-gray-800 dark:text-white">{contact.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{contact.lastMessage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
                
                {/* Chat Window */}
                <main className="w-2/3 flex flex-col">
                    <header className="p-4 border-b dark:border-gray-700 flex items-center">
                         <img src={selectedContact.avatarUrl} alt={selectedContact.name} className="w-10 h-10 rounded-full object-cover mr-4" />
                         <div>
                            <h3 className="text-lg font-bold">{selectedContact.name}</h3>
                            <p className="text-sm text-green-500">Online</p>
                         </div>
                    </header>

                    <div className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 space-y-4">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                                    <p>{msg.text}</p>
                                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>{msg.timestamp}</p>
                                </div>
                            </div>
                        ))}
                         <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t dark:border-gray-700 flex items-center">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <button onClick={handleSendMessage} className="ml-3 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                           <SendIcon className="w-5 h-5" />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Telemedicine;