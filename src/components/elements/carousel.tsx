import { useState } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: string[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='relative w-full mx-auto pt-10'>
      <div className='relative w-full h-96'>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-500'
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className='flex justify-center py-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
