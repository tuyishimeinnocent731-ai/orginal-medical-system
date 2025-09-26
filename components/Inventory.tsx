
import React, { useState } from 'react';
import { mockInventory } from '../services/mockData.ts';
import type { InventoryItem } from '../types.ts';

const Inventory: React.FC = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>(mockInventory);

    const getStockColor = (stock: number) => {
        if (stock < 100) return 'text-red-500';
        if (stock < 500) return 'text-yellow-500';
        return 'text-green-500';
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">General Inventory</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Order Supplies</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Item Name</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Quantity</th>
                            <th className="p-3">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map(item => (
                            <tr key={item.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{item.name}</td>
                                <td className="p-3">{item.category}</td>
                                <td className={`p-3 font-semibold ${getStockColor(item.quantity)}`}>
                                    {item.quantity}
                                </td>
                                <td className="p-3">{item.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;
