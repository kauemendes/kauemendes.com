/** @type {import('next').NextConfig} */
const images = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      toRemotePattern(process.env.CMS_IMAGE_PATTERN)
    ],
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

function toRemotePattern(urlString) {
  const url = new URL(urlString);
  return {
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
  };
}
