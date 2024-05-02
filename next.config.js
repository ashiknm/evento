/** @type {import('next').NextConfig} */
const nextConfig = {
    // gives html css and js file
    // but we will lose the features of server side
    // output : "export",
    images:{
        remotePatterns:[
            {
                protocol : 'https',
                hostname : 'bytegrad.com'
            },
            {
                protocol : 'https',
                hostname : 'images.unsplash.com'
            }
        ]
    }
}

module.exports = nextConfig
