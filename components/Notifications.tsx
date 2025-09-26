import React, { useState } from 'react';
// FIX: Created mockData.ts to provide mock notification data.
import { mockNotifications } from '../services/mockData';
// FIX: Created IconComponents.tsx to provide icon components.
import { NotificationIcon, ChatBubbleIcon, SurgeryIcon, BillingIcon } from './IconComponents';
// FIX: Created types.ts to define the Notification type.
import type { Notification } from '../types';

const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
        case 'message': return <ChatBubbleIcon className="w-5 h-5 text-blue-500" />;
        case 'surgery': return <SurgeryIcon className="w-5 h-5 text-purple-500" />;
        case 'billing': return <BillingIcon className="w-5 h-5 text-green-500" />;
        case 'alert': return <div className="w-5 h-5 text-red-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.001-1.742 3.001H4.42c-1.53 0-2.493-1.667-1.743-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></div>;
        default: return null;
    }
}

const Notifications: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMarkAsRead = (id: string) => {
        setNotifications(
            notifications.map(n => n.id === id ? { ...n, read: true } : n)
        );
    };

    return (
        <div className="relative">
            <button onClick={handleToggle} className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <NotificationIcon className="w-5 h-5" />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-xl z-50 animate-fade-in">
                    <div className="p-3 font-semibold text-gray-800 dark:text-white border-b dark:border-gray-700">Notifications</div>
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? notifications.map(notification => (
                             <div key={notification.id} onClick={() => handleMarkAsRead(notification.id)} className={`flex items-start p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${notification.read ? '' : 'bg-blue-50 dark:bg-blue-900/20'}`}>
                                <div className="flex-shrink-0 mt-1 mr-3">
                                    {getTypeIcon(notification.type)}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{notification.message}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{notification.timestamp}</p>
                                </div>
                                {!notification.read && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full self-center ml-2"></div>}
                            </div>
                        )) : <p className="p-4 text-sm text-gray-500">No notifications.</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notifications;
