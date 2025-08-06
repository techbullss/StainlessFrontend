"use client"

import { useEffect, useState } from 'react';

interface OrderTable {
  id?: number | null;
  phonenumber?: string | null;
  email?: string | null;
  quantity?: number | null;
  amount?: number | null;
  productname?: string | null;
  createdAt?: string | null;
}

export default function OrdersDashboard() {
  const [orders, setOrders] = useState<OrderTable[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://stainlessbackend-5.onrender.com/api/orders',{
    
          credentials:'include'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(Array.isArray(data) ? data : []);
        setFilteredOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatPhoneNumber = (phonenumber?: string | null): string => {
    if (!phonenumber) return 'Not provided';
    const cleaned = phonenumber.replace(/\D/g, '');
    if (cleaned.startsWith('254') && cleaned.length === 12) {
      return `+${cleaned}`;
    } else if (cleaned.startsWith('0') && cleaned.length === 10) {
      return `+254${cleaned.substring(1)}`;
    }
    return cleaned || 'Invalid format';
  };

  const formatAmount = (amount?: number | null): string => {
    if (amount === null || amount === undefined) return 'KSh 0';
    return `KSh ${amount.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term.trim()) {
      setFilteredOrders(orders);
      return;
    }

    const filtered = orders.filter(order => {
      const phone = order.phonenumber || '';
      const formattedPhone = formatPhoneNumber(phone).replace(/\D/g, '');
      const searchDigits = term.replace(/\D/g, '');
      return phone.includes(searchDigits) || formattedPhone.includes(searchDigits);
    });
    
    setFilteredOrders(filtered);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="p-4 bg-red-50 text-red-600 rounded-lg max-w-md mx-auto mt-8">
      Error loading orders: {error}
    </div>
  );

  return (
    <div className="container mx-auto px-0 py-2">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            {filteredOrders.length} {filteredOrders.length === 1 ? 'order' : 'orders'} displayed
          </p>
        </div>
        
        <div className="w-full md:w-96">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Search by phone number..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              {orders.some(o => o.createdAt) && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  {searchTerm ? 'No orders match your search' : 'No orders found'}
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order?.id || Math.random()} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{order?.id || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                    {order?.productname || 'No product name'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order?.email || 'No email'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                    {formatPhoneNumber(order?.phonenumber)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order?.quantity ?? 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatAmount(order?.amount)}
                  </td>
                  {order?.createdAt && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="p-4 text-center text-gray-500 bg-white rounded-lg shadow">
            {searchTerm ? 'No matching orders found' : 'No orders available'}
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order?.id || Math.random()} className="bg-white p-4 rounded-lg shadow border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">Order #{order?.id || 'N/A'}</h3>
                  <p className="text-sm text-blue-600 mt-1">{order?.productname || 'No product name'}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {formatAmount(order?.amount)}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="truncate">{order?.email || 'No email'}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-mono">{formatPhoneNumber(order?.phonenumber)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Quantity</p>
                  <p>{order?.quantity ?? 0}</p>
                </div>
                {order?.createdAt && (
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}