import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ParticleBackground from "@/components/ParticleBackground"
import PlexusBackground from "@/components/PlexusBackground"

export const metadata: Metadata = {
  title: "WHOLEGREEN - Premium Mikroyeşiller",
  description: "Modern kentsel tarım ile premium mikroyeşil üretimi. Sürdürülebilir, hijyenik ve kaliteli gıda çözümleri.",
  generator: "WHOLEGREEN",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"
          suppressHydrationWarning
        ></script>
      </head>
      <body suppressHydrationWarning>
        <PlexusBackground />
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}
