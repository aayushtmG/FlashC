import React from "react"
import Home from "@/components/Home"
import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
function Page() {
  return (
    <div className="container m-auto my-1">
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default Page
