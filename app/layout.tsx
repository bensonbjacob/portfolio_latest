import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jacob Benson | Full Stack Developer',
  description: 'Full Stack Developer based in Auburn, AL.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#FBE2E3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#DBD7FB] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[5rem]'></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-center' />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
