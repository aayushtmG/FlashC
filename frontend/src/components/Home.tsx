"use client"
import React, { useEffect, useState } from "react"
import Card from "@/components/Card"
import Image from "next/image"

const styles = {
  heading:
    "text-4xl xl:text-6xl 2xl:text-6xl text-primary font-bold sm:tracking-wide sm:[word-spacing:20px] uppercase",
  description: "text-gray-400 tracking-widest text-2xl italic font-medium mt-2",
  aboutHeading:
    "italic underline max-xl:text-center decoration-2 underline-offset-4 tracking-widest font-bold  text-primary pl-8 text-3xl",
  animateX: "animate ",
}

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <React.Fragment>
      <div className="max-sm:px-4 p-10 my-20 gap-4 justify-center flex max-xl:flex-col max-xl:items-center xl:py-20  ">
        {/* intro section  wrapper*/}
        <div>
          <div
            className={`max-sm:text-center transition-opacity duration-500 ease-out  ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 id="hero-title" className={styles.heading}>
              Welcome to <br className="mb-6" />
              <span className="text-primary italic max-sm:text-5xl">
                Flash Card
              </span>
            </h1>
            <p className={styles.description}>Your Cards, Your Words</p>
          </div>
          <Image
            src="/card-image.png"
            alt="card image"
            className={`xl:hidden mt-10 transition-opacity duration-700 delay-200  ease-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            width={500}
            height={500}
          />
        </div>
        {/* Card showcase */}
        <div className="hidden xl:flex w-1/3 justify-center  ">
          {/* <Card style="-translate-x-20 translate-y-2 -rotate-12 bg-blue-800 animate-[tiltLeft_1s_ease-out] animation-delay-500 "></Card> */}
          <Card style=" bg-blue-500 animate-tilt-left"></Card>
          <Card style="bg-green-500 animate-tilt-right"></Card>
          <Card
            front={{
              style: "text-yellow-500 bg-black",
              content: "Front Side",
            }}
          ></Card>
        </div>
      </div>
      <div className="h-screen hidden xl:flex justify-center items-center space-x-32 relative">
        <Card
          style="w-[400px] h-[400px] relative "
          front={{ style: "bg-blue-500", content: "Frontend" }}
          back={{ content: "BackEnd", style: "bg-red-300" }}
        ></Card>
        <div id="aboutSection" className="w-1/2">
          <h2 className={styles.aboutHeading}>About</h2>
          <p className={`${styles.description} px-8 text-justify 2xl:text-3xl`}>
            This is flash card app. You can use it for fun, to pracitce your
            memory or just study!!
          </p>
        </div>
      </div>
      <div id="mobile-about-section" className="sm:hidden my-20">
        <h2 className={styles.aboutHeading}>About</h2>
        <p className={`${styles.description} px-8 text-center text-lg`}>
          This is flash card app. You can use it for fun, to pracitce your
          memory or just study!!
        </p>
      </div>
    </React.Fragment>
  )
}

export default Home
