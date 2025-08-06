"use client"
import { useState } from 'react';
 function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
 const handleEmailLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const res = await fetch('https://stainlessbackend-5.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include', 
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
      throw new Error('Login failed');
    }
  
    else{
    
      window.location.href = '/dashboard';
    }
    
  } catch (error) {
    alert("error")
  }
  setLoading(false);
};

return(<div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

        {error && (
          <p className="mb-4 text-center text-red-600 font-medium animate-pulse text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        
      </div>);
}

export default LoginForm;