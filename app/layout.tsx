import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs';
import { ApiProvider } from '@/contexts/api-context';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LIONO | Knowledge Management System",
  description: "Powerful knowledge management with integrated data visualization",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ApiProvider>
              {children}
            </ApiProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
