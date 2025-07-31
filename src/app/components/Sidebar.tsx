'use client';

import Link from 'next/link';

import { User, ListOrdered, MessageCircle, Wallet, Users, BarChart2, LogOut } from 'lucide-react';

export default function Sidebar() {
 

  const navItems = [
    { name: "My Profile", path: "/dashboard/Profile", icon: User },
    { name: "Order List", path: "/dashboard/OrderListing", icon: ListOrdered },
    { name: "Messages", path: "/dashboard/Chat", icon: MessageCircle },
    {
      
      path: '/dashboard/Wallet',
      icon: Wallet,
    },
    { name: "Clients", path: "/dashboard/Client", icon: Users },
    { name: "Finance", path: "/dashboard/Transactions", icon: BarChart2 },
    { name: "Log Out", path: "/dashboard/logout", icon: LogOut },
  ];

  return (
     <aside className="w-64 bg-white shadow-lg p-5 space-y-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6"><Link href="/dashboard">Dashboard</Link></h2>
        <nav className="space-y-2">
          {navItems.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded hover:bg-indigo-100 hover:text-indigo-600 font-medium transition-all"
            >
              <Icon size={18} />
              {name}
            </Link>
          ))}
        </nav>
      </aside>
  );
}
