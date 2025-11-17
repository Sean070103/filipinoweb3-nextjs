import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ph-red': '#CE1126',
        'ph-blue': '#0038A8', 
        'ph-yellow': '#FCD116',
      },
      fontFamily: {
        'jersey': ['var(--font-jersey)', 'monospace'],
        'press-start': ['var(--font-press-start-2p)', 'monospace'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 211, 238, 0.5)',
        'glow-lg': '0 0 40px rgba(34, 211, 238, 0.7)',
        'retro': '4px 4px 0px #000000',
      },
      textShadow: {
        'retro': '2px 2px 0px #000000',
        'glow': '0 0 10px rgba(34, 211, 238, 0.8)',
      }
    },
  },
  plugins: [],
}

export default config
