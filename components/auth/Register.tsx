
import React from 'react';

interface RegisterProps {
  onRegisterSuccess: () => void;
  onNavigateToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess, onNavigateToLogin }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd have validation and an API call here.
        onRegisterSuccess();
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input id="name" name="name" type="text" required className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe"/>
          </div>
          <div>
            <label htmlFor="email-register" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input id="email-register" name="email" type="email" required className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com"/>
          </div>
          <div>
            <label htmlFor="password-register" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input id="password-register" name="password" type="password" required className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••"/>
          </div>
           <div>
            <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
            <input id="confirm-password" name="confirm-password" type="password" required className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••"/>
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <button onClick={onNavigateToLogin} className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
