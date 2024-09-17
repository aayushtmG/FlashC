"use client"
import AddDeckCard from "@/components/AddDeck"
import NavBar from "@/components/Navbar"
import AddDeckMobileButton from "@/components/AddDeckMobileButton"
import { useEffect, useState } from "react"
import axios from "axios"

type Deck = {
  deck_id: number
  title: string
  user_id: number
}
const Dashboard = () => {
  const [decks, setDecks] = useState<Deck[] | undefined>()
  const userId = 1
  const fetchDecks = async () => {
    const result = await (
      await axios.get(`http://127.0.0.1:8000/api/decks/${userId}`)
    ).data
    setDecks(result.decks)
  }
  useEffect(() => {
    fetchDecks()
  }, [])

  return (
    <>
      <NavBar></NavBar>
      {!decks ? (
        <div className="text-center ">
          <p className="text-gray-800 tracking-widest italic  text-lg font-bold mt-10">
            No decks available please add!
          </p>
        </div>
      ) : (
        <div>
          {decks.map((deck) => (
            <div
              className=" flex items-center justify-center w-full h-full p-4"
              key={deck.deck_id}
            >
              <button
                className="flex flex-col items-center justify-center w-full max-w-xs h-[200px] xl:h-[400px] bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg"
                onClick={() => alert(`Opening ${deck.title}`)}
              >
                <p className="text-gray-700 text-lg mb-4">{deck.title}</p>
              </button>
            </div>
          ))}
        </div>
      )}
      <AddDeckCard></AddDeckCard>
      <AddDeckMobileButton></AddDeckMobileButton>
    </>
  )
}

export default Dashboard
