
import React, { useState } from 'react';
import { mockInventory } from '../services/mockData.ts';
import type { InventoryItem } from '../types.ts';

const Inventory: React.FC = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>(mockInventory);

    const getStockColor = (stock: number) => {
        if (stock < 100) return 'text-red-500 dark:text-red-400';
        if (stock < 500) return 'text-yellow-500 dark:text-yellow-400';
        return 'text-green-500 dark:text-green-400';
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-3xl font-bold">General Inventory</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">Order Supplies</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Item Name</th>
                            <th className="p-3 hidden sm:table-cell">Category</th>
                            <th className="p-3">Quantity</th>
                            <th className="p-3 hidden md:table-cell">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map(item => (
                            <tr key={item.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{item.name}</td>
                                <td className="p-3 hidden sm:table-cell">{item.category}</td>
                                <td className={`p-3 font-semibold ${getStockColor(item.quantity)}`}>
                                    {item.quantity}
                                </td>
                                <td className="p-3 hidden md:table-cell">{item.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;