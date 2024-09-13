"use client"
import { FaPlus } from "react-icons/fa"

const AddDeckMobileButton = () => {
  const handleAddDeck = () => {
    // Logic to handle adding a new deck
    prompt("Name the deck")
  }

  return (
    <div className="fixed bottom-4 right-4 md:hidden">
      <button
        onClick={handleAddDeck}
        className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <FaPlus className="text-3xl" />
      </button>
    </div>
  )
}

export default AddDeckMobileButton
