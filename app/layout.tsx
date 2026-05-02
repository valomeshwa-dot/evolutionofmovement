import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BookingProvider } from '@/components/BookingProvider';
import { AuthProvider } from "@/context/AuthContext"


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'EOM | Evolution of Movement',
  description: 'Strength, Mobility, Function. Premium physiotherapy and performance training studio.',
};



export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-[#FAFAFA] text-gray-900 font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <AuthProvider>
          <BookingProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 pt-24">
                {children}
              </main>
              <Footer />
            </div>
            <WhatsAppButton />
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

