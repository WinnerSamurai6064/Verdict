/**
 * Rename this file to tailwind.config.cjs if your environment requires a Tailwind config file.
 * Kept as .txt because this workspace previously blocked direct config writes with executable JS extensions.
 */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verdict: {
          black: '#000000',
          panel: '#05070d',
          soft: '#0a0f1c',
          blue: '#2f8cff',
          muted: '#8a97aa',
        },
      },
      boxShadow: {
        verdict: '0 0 34px rgba(47, 140, 255, 0.32)',
      },
    },
  },
  plugins: [],
};
