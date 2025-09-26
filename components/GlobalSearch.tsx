
import React, { useState, useMemo } from 'react';
// FIX: Created mockData.ts and consolidated imports into a single line.
import { mockPatients, mockStaff, mockInvoices } from '../services/mockData.ts';
// FIX: Created IconComponents.tsx to provide the SearchIcon component.
import { SearchIcon } from './IconComponents.tsx';

const GlobalSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return null;

    const lowerCaseQuery = query.toLowerCase();

    const patients = mockPatients
      .filter(p => p.name.toLowerCase().includes(lowerCaseQuery) || p.id.toLowerCase().includes(lowerCaseQuery))
      .map(p => ({ type: 'Patient', ...p }));

    const staff = mockStaff
      .filter(s => s.name.toLowerCase().includes(lowerCaseQuery) || s.role.toLowerCase().includes(lowerCaseQuery))
      .map(s => ({ type: 'Staff', ...s }));

    const invoices = mockInvoices
      .filter(i => i.patientName.toLowerCase().includes(lowerCaseQuery) || i.id.toLowerCase().includes(lowerCaseQuery))
      .map(i => ({ type: 'Invoice', ...i }));

    return { patients, staff, invoices };
  }, [query]);

  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Global Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
      />
      {isFocused && query.length > 1 && results && (
        <div className="absolute mt-2 w-full max-h-96 overflow-y-auto bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-xl z-50">
          {(results.patients.length + results.staff.length + results.invoices.length) === 0 ? (
            <div className="p-4 text-sm text-gray-500 dark:text-gray-400">No results found.</div>
          ) : (
            <>
              {results.patients.length > 0 && <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Patients</div>}
              {results.patients.map(p => (
                <div key={`p-${p.id}`} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{p.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{p.id} - {p.department}</p>
                </div>
              ))}
              {results.staff.length > 0 && <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase border-t dark:border-gray-700">Staff</div>}
              {results.staff.map(s => (
                <div key={`s-${s.id}`} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{s.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.role} - {s.department}</p>
                </div>
              ))}
              {results.invoices.length > 0 && <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase border-t dark:border-gray-700">Invoices</div>}
              {results.invoices.map(i => (
                <div key={`i-${i.id}`} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{i.id} - ${i.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">For: {i.patientName}</p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;