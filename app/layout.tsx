import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// <CHANGE> Import Script component for analytics
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "الخدمات والعروض الحصرية",
  description:
    " الخدمات والعروض الحصرية و الدفع السريع وإتمام عمليات الدفع بسرعة وسهولة, قم بدفع جميع فواتيرك إلكترونياً الخدمات والعروض الحصرية,",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {children}
        {/* <CHANGE> Add Google Analytics scripts */}

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-XXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXX');
          `}
        </Script>
      </body>
    </html>
  )
}
