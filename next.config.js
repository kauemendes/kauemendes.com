/** @type {import('next').NextConfig} */
const images = {
  images: {
    remotePatterns: [],
  },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/kauemendes/',
        permanent: false,
        basePath: false
      },
      {
        source: '/whatsapp',
        destination: 'https://wa.me/351965613249',
        permanent: false,
        basePath: false
      },
      {
        source: '/github',
        destination: 'https://github.com/kauemendes/',
        permanent: false,
        basePath: false
      },
    ]
  },
};

module.exports = images;

