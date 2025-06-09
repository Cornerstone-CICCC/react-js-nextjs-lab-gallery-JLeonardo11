'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ModalPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [photo, setPhoto] = useState<any>(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      .then(res => res.json())
      .then(data =>
        setPhoto({
          ...data,
          url: `https://placehold.co/1000x1000?text=Photo+${data.id}`,
        })
      )
  }, [params.id])

  if (!photo) return <div className="p-8">Loading...</div>

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={() => router.back()}
    >
      <div
        className="bg-white p-4 rounded shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <Image src={photo.url} alt={photo.title} width={1000} height={1000} />
        <p className="mt-2">{photo.title}</p>
      </div>
    </div>
  )
}
