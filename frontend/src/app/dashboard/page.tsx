"use client"
import AddDeckCard from "@/components/AddDeck"
import NavBar from "@/components/Navbar"
import AddDeckMobileButton from "@/components/AddDeckMobileButton"
import { useEffect, useState } from "react"
import axios from "axios"
import { useUser, User } from "@/context/UserContext"
import { useRouter } from "next/navigation"

type Deck = {
  deck_id: number
  title: string
  user_id: number
}

const Dashboard = () => {
  const [decks, setDecks] = useState<Deck[] | undefined>()
  const { user } = useUser()
  const router = useRouter()
  const fetchDecks = async () => {
    try {
      const url = `http://127.0.0.1:8000/api/users/${user?.user_id}/decks`
      const result = (await axios.get(url)).data
      setDecks(result.decks)
    } catch (err) {
      console.log(err)
    }
  }
  const hanldeDeckOpening = (deckId: number) => {
    router.push(`/deck/${deckId}`)
  }
  useEffect(() => {
    if (user) {
      fetchDecks()
    }
  }, [user])

  if (user) {
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
          <div className="flex justify-center">
            {decks.map((deck) => (
              <div
                className=" flex items-center justify-center p-4"
                key={deck.deck_id}
              >
                <button
                  className="flex flex-col items-center justify-center w-full max-w-xs md:w-[300px] h-[200px] xl:h-[400px] bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg"
                  onClick={() => hanldeDeckOpening(deck.deck_id)}
                >
                  <p className="text-gray-700 text-lg mb-4">{deck.title}</p>
                </button>
              </div>
            ))}

            <AddDeckCard></AddDeckCard>
            <AddDeckMobileButton></AddDeckMobileButton>
          </div>
        )}
      </>
    )
  } else {
    return (
      <>
        <NavBar></NavBar>
        <div className="text-center mt-20">
          <h1 className="text-4xl xl:text-6xl 2xl:text-4xl text-primary font-bold  uppercase">
            You are not logged in!!
          </h1>
          <p className="text-gray-400 tracking-widest text-2xl italic font-medium mt-2">
            Please log in
          </p>
        </div>
      </>
    )
  }
}

export default Dashboard
