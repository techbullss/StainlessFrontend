import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar - hidden on mobile by default, shown when toggled */}
        <div className="md:h-screen md:w-64 md:bg-white">
        <Sidebar />
        </div>
    
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 transition-all duration-300">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}