"use client"
// contexts/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react"

// Define the User type
type User = {
  username: string
  email: string
  password: string // Avoid storing sensitive information in context
}

// Define the context shape
type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined)

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook for using context
export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
