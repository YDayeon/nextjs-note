import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';

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
    <html lang='en'>
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
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
