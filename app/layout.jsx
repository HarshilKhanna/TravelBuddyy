import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider.jsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TravelBuddy - Find Your Travel Companion",
  description: "Connect with fellow VIT Vellore students for shared rides to airports, cities, and more.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 