/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    USER_NAME: process.env.USER_NAME,
    DATABASE: process.env.DATABASE,
    ourIp: process.env.ourIp,


  },
}

module.exports = nextConfig
