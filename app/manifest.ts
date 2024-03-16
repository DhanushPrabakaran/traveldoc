import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js App',
    short_name: 'Next.js App',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
         "sizes":"114x114",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-114x114.png"
      },
      {
         "sizes":"120x120",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-120x120.png"
      },
      {
         "sizes":"144x144",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-144x144.png"
      },
      {
         "sizes":"152x152",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-152x152.png"
      },
      {
         "sizes":"180x180",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-180x180.png"
      },
      {
         "sizes":"57x57",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-57x57.png"
      },
      {
         "sizes":"60x60",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-60x60.png"
      },
      {
         "sizes":"72x72",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-72x72.png"
      },
      {
         "sizes":"76x76",
         "type":"image/png",
         "src":"https://github.githubassets.com/apple-touch-icon-76x76.png"
      },
      {
         "src":"https://github.githubassets.com/app-icon-192.png",
         "type":"image/png",
         "sizes":"192x192"
      },
      {
         "src":"https://github.githubassets.com/app-icon-512.png",
         "type":"image/png",
         "sizes":"512x512"
      }
   ],
  }
}