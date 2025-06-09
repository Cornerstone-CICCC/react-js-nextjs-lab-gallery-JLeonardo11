'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

export default function ModalCatchAll({ params }: { params: { catchAll: string[] } }) {
  const router = useRouter()
  const [photo, setPhoto] = useState<any>(null)

  const id = params.catchAll?.[0] // Expecting format: /gallery/[id]
  const pathname = usePathname()

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data =>
          setPhoto({
            ...data,
            url: `https://placehold.co/1000x1000?text=Photo+${data.id}`,
          })
        )
    }
  }, [id])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => router.back()}
    >
      <div
        className="bg-white p-6 rounded shadow max-w-3xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <Image src={photo.url} alt={photo.title} width={1000} height={1000} />
        <p className="mt-4 text-center">{photo.title}</p>
      </div>
    </div>
  )
}
