
import React from 'react';

const mockInventory = [
    { id: 'I001', name: 'N95 Masks', category: 'PPE', stock: 15000, reorderLevel: 5000 },
    { id: 'I002', name: 'Surgical Gloves (Box)', category: 'PPE', stock: 800, reorderLevel: 200 },
    { id: 'I003', name: 'IV Drip Bags', category: 'Medical Supplies', stock: 450, reorderLevel: 100 },
    { id: 'I004', name: 'Syringes (10ml)', category: 'Medical Supplies', stock: 2500, reorderLevel: 1000 },
    { id: 'I005', name: 'Defibrillator Pads', category: 'Equipment', stock: 95, reorderLevel: 50 },
];

const Inventory: React.FC = () => {
    const getStockColor = (stock: number, reorderLevel: number) => {
        if (stock < reorderLevel) return 'text-red-500';
        if (stock < reorderLevel * 1.5) return 'text-yellow-500';
        return 'text-green-500';
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">General Inventory</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Item Name</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Stock Level</th>
                            <th className="p-3">Reorder Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockInventory.map(item => (
                            <tr key={item.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{item.name}</td>
                                <td className="p-3">{item.category}</td>
                                <td className={`p-3 font-semibold ${getStockColor(item.stock, item.reorderLevel)}`}>
                                    {item.stock}
                                </td>
                                <td className="p-3">{item.reorderLevel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;
