import { useState } from "react"
import Card from "./Card"

const Slider = ({
  cards,
}: {
  cards: Array<{ front_text: string; back_text: string }>
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative  max-w-xl mx-auto ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards &&
            cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card
                  style="relative w-[80%] h-[400px] mx-auto "
                  front={{
                    style: "bg-blue-500 flip-card-front",
                    content: card.front_text,
                  }}
                  back={{
                    content: card.back_text,
                    style: "bg-red-300 flip-card-back",
                  }}
                />
              </div>
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
    </div>
  )
}

export default Slider
