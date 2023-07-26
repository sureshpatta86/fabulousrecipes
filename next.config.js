/** @type {import('next').NextConfig} */
module.exports = {
    env: {
        EDAMAM_APP_ID: 'd30d1358',
        EDAMAM_API_KEY:'69f73f8c17385731fc210df451072b56'
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'edamam-product-images.s3.amazonaws.com',
            port: '',           
          },
          {
            protocol: 'https',
            hostname: 'icons8.com',
            port: '',
          }
        ],
      },
  }
