/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      backdropBlur: {
        none: 'none',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
