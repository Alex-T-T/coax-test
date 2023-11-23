import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                montserrat: ['var(--montserrat)'],
                calibri: ['var(--calibri)'],
            },
            colors: {
                title: 'rgba(255, 255, 255, 0.80)',
                primary: 'rgba(255, 255, 255, 0.90)',
                'card-shadow': '0px 1px 24px -1px rgba(0, 0, 0, 0.10)',
                gold: '#FFD700',
                input: 'rgba(255, 255, 255, 0.60)',
                'placeholder-text': 'rgba(33, 33, 33, 0.70)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'item-card':
                    'linear-gradient(112deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.10) 73.15%), url(/images/ellipse1.svg), url(/images/ellipse2.svg), url(/images/ellipse3.svg), url(/images/ellipse4.svg)',
                picture: 'url(/images/bg.png)',
            },
            backgroundPosition: {
                all: 'center center, top left, bottom left, bottom center, bottom right',
            },
        },
    },
    plugins: [],
};
export default config;
