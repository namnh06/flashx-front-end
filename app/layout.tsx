import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | FlashX Dashboard',
    default: 'FlashX Dashboard',
  },
  description:
    'This is a project in the program Cloud Computing and Blockchain in Saskatchewan Polytech,course name PROJ-611 Adoption of Cloud Computing and Blockchain Technology in the Industry.',
  metadataBase: new URL('https://namcoi.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
