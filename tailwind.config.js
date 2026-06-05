module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0d0b09',
          50: '#1a1714',
          100: '#221f1a',
          200: '#2e2a24',
        },
        gold: {
          DEFAULT: '#c9a25c',
          light: '#e8cc7a',
          dim: '#8a6a30',
          faint: 'rgba(201,162,92,0.15)',
          subtle: 'rgba(201,162,92,0.25)',
          border: 'rgba(201,162,92,0.35)',
        },
        parchment: {
          DEFAULT: '#f2e8d0',
          muted: '#c4b090',
          dim: '#8a7a60',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lora: ['Lora', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
