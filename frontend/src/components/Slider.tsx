import { useState } from "react"

const Slider = () => {
  const images = [
    "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1",
    "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-gray-800 w-14 h-14 text-white p-3 rounded-full hover:bg-gray-600"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-gray-800 w-14 h-14 text-white p-3 rounded-full hover:bg-gray-600"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {/* {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))} */}
      </div>
    </div>
  )
}

export default Slider
