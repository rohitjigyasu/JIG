
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Jigyasu Science Studio',
  description: 'A New Way of Science Learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </nav>
        <main>{children}</main>
        <footer>Footer Text Goes Here</footer>
      </body>
    </html>
  );
}
