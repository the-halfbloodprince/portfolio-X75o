module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
        colors: {
          'black': '#111',
          'gray': '#aaa',
          'accent': '#6a26cd'
        }
    },
  },
  plugins: [],
}