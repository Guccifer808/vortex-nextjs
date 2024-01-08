import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Vortex Web Development',
    template: '%s | Vortex',
  },
  description:
    'Discover excellence in web development with Vortex. We craft innovative and scalable solutions, ensuring your online presence stands out. From design to deployment, trust Vortex for cutting-edge web development services tailored to your needs.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='container'>
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
