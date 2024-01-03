import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import type { Metadata } from 'next';

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
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
