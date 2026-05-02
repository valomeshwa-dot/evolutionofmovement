"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // 1. FORCE CLEAN SESSION ON APP LOAD
    const clearInvalidSession = async () => {
      try {
        // 5. IMPORTANT: DO NOT USE OLD SESSION DATA - fetch fresh session
        const { data, error } = await supabase.auth.getSession()

        if (!data.session || error) {
          await supabase.auth.signOut()
          localStorage.clear()
          sessionStorage.clear()
          if (mounted) setUser(null)
        } else {
          if (mounted) setUser(data.session.user)
        }
      } catch (error: any) {
        // 4. HANDLE REFRESH TOKEN ERROR SAFELY
        console.error(error)

        if (
          error?.message?.includes("Refresh Token") ||
          error?.message?.includes("Invalid")
        ) {
          await supabase.auth.signOut()
          localStorage.clear()
          sessionStorage.clear()
          
          // Stop infinite loop: only redirect if not already home
          if (window.location.pathname !== "/") {
            window.location.href = "/" // Fallback to home since /login does not exist
          }
        }
        if (mounted) setUser(null)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    clearInvalidSession()

    // 2. HANDLE AUTH STATE PROPERLY
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // Prevent infinite loop by not force-redirecting guests on public pages
        if (!session && window.location.pathname.startsWith("/profile")) {
          window.location.href = "/" // Redirect to home
        }
        
        if (mounted) {
          setUser(session?.user || null)
        }
      }
    )

    return () => {
      mounted = false
      listener.subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
  return context
}
