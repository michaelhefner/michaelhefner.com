import type { Metadata } from "next";
import "./globals.css";
import styles from "./header.module.scss";
import Link from "next/link";


export const metadata: Metadata = {
  title: "MichaelHefner.com",
  description: "Michael Hefner's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1 className={styles.logo}>michaelhefner.com</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/code">Code</Link>
          </nav>
          </header>
        {children}
      <footer className={styles.footer}>

      <p>
          &copy;{new Date().getFullYear()} michaelhefner.com
        </p>
      </footer>
      </body>
    </html>
  );
}
