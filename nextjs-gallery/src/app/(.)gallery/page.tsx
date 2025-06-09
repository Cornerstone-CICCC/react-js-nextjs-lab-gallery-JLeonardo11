// app/gallery/page.tsx
import Image from 'next/image'
import Link from 'next/link'

async function fetchPhotos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
  const data = await res.json()

  // Replace with placehold.co URLs
  return data.map((photo: any) => ({
    ...photo,
    thumbnailUrl: `https://placehold.co/300x300?text=Photo+${photo.id}`,
    url: `https://placehold.co/1000x1000?text=Photo+${photo.id}`,
  }))
}

export default async function GalleryPage() {
  const photos = await fetchPhotos()

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {photos.map((photo: any) => (
        <Link key={photo.id} href={`/gallery/${photo.id}`}>
          <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={300}
            height={300}
            className="rounded shadow hover:scale-105 transition"
          />
        </Link>
      ))}
    </div>
  )
}
