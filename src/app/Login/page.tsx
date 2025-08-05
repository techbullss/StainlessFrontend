// app/login/page.tsx
"use client"
import LoginForm from "../components/LoginComponent"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from "../components/AuthContext"


export default function Login() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard') // Redirect if already logged in
    }
  }, [isAuthenticated, router])

  if (isAuthenticated) {
    return null // Or a loading spinner
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <LoginForm />
      </div>
    </div>
  )
}