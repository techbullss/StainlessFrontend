import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";


export default function Dashbaord({ children }: { children: ReactNode }){
    return (
      <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
    
        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </ProtectedRoute>
      );
}