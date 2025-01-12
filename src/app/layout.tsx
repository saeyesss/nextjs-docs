import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@liveblocks/react-ui/styles.css';
import '@liveblocks/react-tiptap/styles.css';
import './globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ConvexClientProvider } from '@/components/convex-client-provider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Docs - Nidugala',
  description: 'do you really need a catchy description for a word processor?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            <Analytics />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
