/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com']
  },
  webpack: (config, { isServer }) => {
    if (isServer && process.env.NODE_ENV === 'development') {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    return config
  }
}

export default nextConfig
