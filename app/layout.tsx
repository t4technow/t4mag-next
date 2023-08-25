import "@/assets/css/bootstrap.min.css";
import "@/assets/css/all.min.css";

import '@/app/globals.css'
import '@/styles/style.css'
import type { Metadata } from 'next'
import Header from "@/components/sections/header";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
