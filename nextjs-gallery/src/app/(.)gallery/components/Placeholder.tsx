"use client"

import { useEffect, useState } from "react"

interface ImagePlaceholder {
  id: number,
  title: string,
  description: string
}

const Images = () => {
  const [images, setImages] = useState<ImagePlaceholder[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/gallery")
      const data = await res.json()
      setImages(data.products)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <ul>
       <img src="" alt="" />
      </ul>
    </div>
  )
}

export default Images