"use client"
// components/AddDeckCard.tsx
import { FaPlus } from "react-icons/fa" // Importing a plus icon from react-icons

const AddDeckCard = () => {
  const handleAddDeck = () => {
    // Logic to handle adding a new deck
    console.log("Add new deck")
  }

  return (
    <div className="max-xl:hidden flex items-center justify-center w-full h-full p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-xs h-[200px] xl:h-[400px] bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg">
        <p className="text-gray-700 text-lg mb-4">Add a Deck</p>
        <button
          onClick={handleAddDeck}
          className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <FaPlus className="text-3xl" />
        </button>
      </div>
    </div>
  )
}

export default AddDeckCard
