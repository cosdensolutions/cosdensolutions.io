import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#faf5cf',
          700: '#a37d54',
        },
        secondary: {
          500: '#e6ecf2',
        },
        grayscale: {
          200: '#e6e6e6',
          400: '#c4c4c4',
          700: '#2b2b2b',
          800: '#1a1a1a',
          900: '#000',
        },
        card: {
          default: '#343740',
        },
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
      fontSize: {
        d1: ['80px', { letterSpacing: '-1px', lineHeight: '88px' }],
        d2: ['48px', { letterSpacing: '-1px', lineHeight: '56px' }],
        h1: ['32px', { letterSpacing: '-0.25px', lineHeight: '40px' }],
        h2: ['28px', { letterSpacing: '0px', lineHeight: '32px' }],
        h3: ['24px', { letterSpacing: '0.2px', lineHeight: '32px' }],
        s1: ['22px', { letterSpacing: '0.2px', lineHeight: '32px' }],
        s2: ['18px', { letterSpacing: '0.2px', lineHeight: '24px' }],
        b1: ['16px', { letterSpacing: '0px', lineHeight: '24px' }],
        b2: ['14px', { letterSpacing: '0px', lineHeight: '20px' }],
        cta1: [
          '16px',
          { letterSpacing: '0.5px', lineHeight: '24px', fontWeight: 'bold' },
        ],
        cta2: ['14px', { letterSpacing: '0.2px', lineHeight: '20px' }],
        label1: ['14px', { letterSpacing: '0.2px', lineHeight: '20px' }],
        label2: ['12px', { letterSpacing: '0.5px', lineHeight: '18px' }],
        overline: ['10px', { letterSpacing: '0.25px', lineHeight: '14px' }],
        caption: ['12px', { letterSpacing: '0.5px', lineHeight: '16px' }],
      },
    },
  },
  plugins: [],
};
export default config;
