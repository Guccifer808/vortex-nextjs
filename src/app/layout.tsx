import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vortex',
  description: 'Digital Agency',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
