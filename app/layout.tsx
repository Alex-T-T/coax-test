import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

const Calibri = localFont({
    src: [
        {
            path: '../public/fonts/Calibri/Fonts/Calibri-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Calibri/Fonts/Calibri-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Calibri/Fonts/Calibri-Light.ttf',
            weight: '300',
            style: 'normal',
        },
    ],

    variable: '--font-calibri',
});

export const metadata: Metadata = {
    title: 'Shoping List',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${montserrat.variable} ${Calibri.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
