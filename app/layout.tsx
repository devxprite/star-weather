import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ChartInit from '@/utils/ChartInit';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import Logo from '../public/weather.png'; 

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Star Weather',
    description: 'An advanced weather website where users can view current weather conditions, forecasts, air quality, weather maps, and more.',
    keywords: ['weather', 'forecast', 'air quality', 'maps', 'star weather', 'starweather', 'opensource', 'open source', 'react', 'nextjs', 'tailwindcss', 'typescript'],
    metadataBase: new URL("http://star-weather.vercel.app"),
    openGraph:{
        images:[{
            url: '/banner.png'
        }],
    },
    icons: {
        icon: '/weather.png', 
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ChartInit />
                <div className="mx-auto min-h-screen max-w-[86rem] p-4">
                    <div className="mb-4 flex items-center space-x-4">
                        <Image src={Logo} alt="Star Weather Logo" className="h-10 w-10" />
                        <h1 className="text-2xl font-bold">Star Weather</h1>
                    </div>
                    <div className="-m-14">
                        <SearchBar />
                    </div>
                    <div>{children}</div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
