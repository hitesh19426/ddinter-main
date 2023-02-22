const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3001' : 'https://ddinter-main.vercel.app'