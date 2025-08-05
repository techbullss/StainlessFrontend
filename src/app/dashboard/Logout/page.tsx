"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function LogoutPage() {
    const router = useRouter();
  
  useEffect(() => {
    const logout = async () => {
        
    
        try {
          const response = await fetch('http://localhost:8080/api/auth/logout', {
            method: 'POST',
            credentials: 'include', // Essential for cookie-based auth
          });
    
          if (!response.ok) {
            throw new Error('Logout failed');
          }
    
          localStorage.removeItem('userData');
          sessionStorage.clear();
    
          // Redirect to login page
          router.push('/Login');
        } catch (err) {
          alert(err instanceof Error ? err.message : 'Logout failed');
          console.error('Logout error:', err);
        } 
    };

    logout();
  }, [router]);

  return <p>Logging out...</p>;
}
