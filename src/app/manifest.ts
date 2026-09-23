import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Meraki English - Academic Grammar & Lexicon',
    short_name: 'Meraki',
    description: 'Sistem Pembelajaran Mandiri Tata Bahasa & Retorika Bahasa Inggris Presisi Berbasis Kaidah Ilmiah',
    start_url: '/',
    display: 'standalone',
    background_color: '#DFE5EA',
    theme_color: '#00638E',
    orientation: 'any',
    categories: ['education', 'productivity'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
