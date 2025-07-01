"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  title: string
  description: string
}

interface LuxuryGalleryProps {
  images: GalleryImage[]
}

export function LuxuryGallery({ images }: LuxuryGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <Card key={index} className="luxury-card overflow-hidden group hover:scale-105 transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyruQfGBWjWDzVHl+8WN/h25xvLcjTm5RFqWUr5/wDF2RAqiVDFOQjKFnq8fhqU5PeGEvhLT9vQkHSN5R9H3pOWCkJXK9n2jcNhcKaWykIsVCSWLvpIGtxAXf7Gn1lrWNBBk+jJE6cWqNd++zqxWJpYsQdqeQwFE0tdNbREDlRjm0jwgO8KWmTzq8/lU4x5wTPQPRJLuHjvvp/BSQPBV5vyru+BUGJKNrGYh2kfNKvT6G0a0ySBJFbcoBkVCtO+l9xYPG5B7G8//9k="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-lg font-medium mb-1">{image.title}</h4>
              <p className="text-sm text-gray-200">{image.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
