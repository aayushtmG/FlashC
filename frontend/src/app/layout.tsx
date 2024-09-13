import "./globals.css"
import type { Metadata } from "next"
import { Inter, Shantell_Sans } from "next/font/google"
import { UserProvider } from "@/context/UserContext"

const customFont = Shantell_Sans({
  subsets: [],
  variable: "--shantell-font",
})

export const metadata: Metadata = {
  title: "FlashC",
  description: "An flash card application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={customFont.variable}>{children}</body>
      </html>
    </UserProvider>
  )
}
