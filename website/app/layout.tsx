
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Theme Generator - Create Custom Themes Easily',
  description: 'Generate beautiful, customized themes for your applications with our easy-to-use theme generator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}