import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Meraki English - Academic Grammar & Lexicon',
    short_name: 'Meraki',
    description: 'Sistem Pembelajaran Mandiri Tata Bahasa & Retorika Bahasa Inggris Presisi Berbasis Kaidah Ilmiah',
    start_url: '/',
    display: 'standalone',
    background_color: '#EFE9DF',
    theme_color: '#EFE9DF',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
