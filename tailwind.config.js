export default {
  theme: {
    fontFamily: {
        'Inter': 'Inter'
    }
  }, 
  plugins: [FormKitVariants],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: false
    }
  }
}