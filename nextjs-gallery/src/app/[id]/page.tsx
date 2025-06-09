import Image from 'next/image'

async function fetchPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  const photo = await res.json()

  return {
    ...photo,
    url: `https://placehold.co/1000x1000?text=Photo+${photo.id}`,
  }
}

export default async function PhotoDetail({ params }: { params: { id: string } }) {
  const photo = await fetchPhoto(params.id)

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">{photo.title}</h1>
      <Image src={photo.url} alt={photo.title} width={1000} height={1000} />
    </div>
  )
}
