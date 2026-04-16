import './globals.css';

export const metadata = {
  title: 'Noppawat Chotiwan',
  description: 'Personal portfolio website',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
