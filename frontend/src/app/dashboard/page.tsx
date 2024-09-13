import AddDeckCard from "@/components/AddDeck"
import NavBar from "@/components/Navbar"
import AddDeckMobileButton from "@/components/AddDeckMobileButton"

const Dashboard = () => {
  const decks = undefined
  return (
    <>
      <NavBar></NavBar>
      {!decks && (
        <div className="text-center ">
          <p className="text-gray-800 tracking-widest italic  text-lg font-bold mt-10">
            No decks available please add!
          </p>
        </div>
      )}
      <AddDeckCard></AddDeckCard>
      <AddDeckMobileButton></AddDeckMobileButton>
    </>
  )
}

export default Dashboard
