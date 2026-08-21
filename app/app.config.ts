export default defineAppConfig({
  baseURL: '/cursor/',
  ui: {
    colors: {
      primary: 'pink',
      neutral: 'zinc',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
  },
})
