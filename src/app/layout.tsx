import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          header
          <div>
            <Link href={'/about'}>about</Link>
          </div>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
