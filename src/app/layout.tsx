import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bíblia Cristã Online',
    description:
        'A Bíblia Cristã Online é um projeto que visa levar o reino para todos aqueles que tem acesso a internet.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                {children}
                <Footer />
            </body>
        </html>
    )
}
