'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, ListOrdered, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';


type NavItem = {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
} & (
  | {
      path: string;
      action?: never;
      isButton?: false;
    }
  | {
      path?: never;
      action: () => void;
      isButton: true;
    }
);

export default function Sidebar() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/Login');
  };

  const navItems: NavItem[] = [
    { 
      name: "Users", 
      path: "/dashboard/Users", 
      icon: User 
    },
    { 
      name: "Order List", 
      path: "/dashboard/OrderListing", 
      icon: ListOrdered 
    },
    { 
      name: "Log Out", 
      action: handleLogout, 
      icon: LogOut,
      isButton: true 
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-5 space-y-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">
        <Link href="/dashboard">Dashboard</Link>
      </h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          item.isButton ? (
            <button
              key={item.name}
              onClick={item.action}
              className="flex w-full items-center gap-3 px-4 py-2 text-gray-700 rounded hover:bg-indigo-100 hover:text-indigo-600 font-medium transition-all"
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded hover:bg-indigo-100 hover:text-indigo-600 font-medium transition-all"
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          )
        ))}
      </nav>
    </aside>
  );
}