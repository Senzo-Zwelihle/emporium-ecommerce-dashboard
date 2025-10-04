import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "@/app/api/uploadthing/core"

import { Toaster } from "@/components/ui/sonner"
import { ReactLenis } from "@/components/providers/lenis-provider"
import { NextThemeProvider } from "@/components/providers/next-themes-provider"
import { EdgeStoreProvider } from "@/components/providers/edgestore-provider"
import { NotificationProvider } from "@/components/providers/notification-provider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Emporium Ecommerce Dashboard",
  description:
    "Discover high-quality, trendy, and sustainable products at Elysian Emporium. Your go-to online store for modern apparel, electronics, and home goods. Experience a seamless shopping experience with Next.js.",
  keywords: [
    "online store",
    "ecommerce",
    "modern apparel",
    "electronics",
    "home goods",
    "trendy fashion",
    "sustainable products",
    "South African",
    "Next.js"
  ],
  authors: [{ name: "Senzo Masango" }],
  creator: "Senzo Masango",
  publisher: "Senzo Masango",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.1,
        duration: 2,
        orientation: "vertical",
        gestureOrientation: "both",
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertiaExponent: 1.7,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
        autoResize: true,
        autoRaf: true,
        anchors: true
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        >
          <EdgeStoreProvider>
            <NextThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NotificationProvider>
                <NextSSRPlugin
                  routerConfig={extractRouterConfig(ourFileRouter)}
                />
                <Toaster theme="system" />
                {children}
              </NotificationProvider>
            </NextThemeProvider>
          </EdgeStoreProvider>
        </body>
      </html>
    </ReactLenis>
  )
}
