/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['param-hr-resources.s3.af-south-1.amazonaws.com', 'res.cloudinary.com'],
      },
      env: {
        googleAnalyticsKey:"G-F1NZRBMHZ7",
        isProd:"true"
      }
}






module.exports = nextConfig
