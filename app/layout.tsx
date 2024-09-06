import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Dashboard',
  description: 'Admin dashboard for managing products, orders, and customers',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
