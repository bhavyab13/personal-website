// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Personal Website',
  description: 'Built with Next.js and Spline',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
