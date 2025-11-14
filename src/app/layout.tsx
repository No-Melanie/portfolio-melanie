import type { Metadata, Viewport } from 'next'; 
import { Inter } from 'next/font/google';
import './globals.css'; 
import { Header } from './FooternHeader/header';
import { Footer } from './FooternHeader/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melanie Rocha - Frontend Developer & UI/UX Designer',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}