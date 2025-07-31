import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanishq Pandey - Portfolio",
  description: "Full Stack Developer passionate about creating innovative solutions",
  keywords: "Tanishq Pandey, Full Stack Developer, React, Next.js, Node.js, Portfolio",
  authors: [{ name: "Tanishq Pandey" }],
  openGraph: {
    title: "Tanishq Pandey - Portfolio",
    description: "Full Stack Developer passionate about creating innovative solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
