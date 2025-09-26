
import React, { useState } from 'react';
import { mockAssets } from '../services/mockData.ts';
import type { Asset } from '../types.ts';

const AssetRegistry: React.FC = () => {
    const [assets, setAssets] = useState<Asset[]>(mockAssets);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Asset Registry</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                {assets.length > 0 ? (
                    <table className="w-full text-left">
                        {/* Table implementation would go here */}
                    </table>
                ) : (
                    <p className="text-center text-gray-500 py-8">No assets found.</p>
                )}
            </div>
        </div>
    );
};

export default AssetRegistry;
