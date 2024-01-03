import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vortex',
  description: 'Digital Agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
