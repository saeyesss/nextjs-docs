import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ConvexClientProvider } from '@/components/convex-client-provider';
import { Toaster } from 'sonner';
const inter = Inter({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Word Processor',
  description: 'do you need a catchy description for a word processor',
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
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
