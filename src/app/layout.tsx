import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

export const metadata = {
  title: 'The most coolest products site',
  description: 'This is the website well-know for good products',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
          <nav className={styles.header_nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
