import "@/assets/css/bootstrap.min.css";
import "@/assets/css/all.min.css";

import '@/app/globals.css'
import '@/styles/style.css'
import type { Metadata } from 'next'
import Header from "@/components/sections/header";
import Providers from "./Providers";


export const metadata: Metadata = {
  title: 'T4Mag',
  description: 'Tech blog covering latest news, reviews and tutorials related to technology.',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
