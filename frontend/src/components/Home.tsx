"use client"
import React, { useEffect, useState } from "react"
import Card from "@/components/Card"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/UserContext"
import Dashboard from "@/app/dashboard/page"

const styles = {
  heading:
    "text-4xl xl:text-6xl 2xl:text-6xl text-primary font-bold sm:tracking-wide sm:[word-spacing:20px] uppercase",
  description: "text-gray-400 tracking-widest text-2xl italic font-medium mt-2",
  aboutHeading:
    "italic underline max-xl:text-center decoration-2 underline-offset-4 tracking-widest font-bold  text-primary pl-8 text-3xl",
}
const bigCard = {
  initial: {
    opacity: 0,
    x: 0,
  },
  show: {
    opacity: 1,
    x: -300,
    rotate: -20,
    transition: {
      delay: 0.2,
    },
  },
  animate: {
    rotateY: [0, 0, 180, 180, 180, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
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
          <Card
            style="-translate-x-20 translate-y-2 -rotate-12 bg-blue-800"
            motionVariants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
                x: -80,
                rotateZ: -20,
                transition: { duration: 0.3 },
                translateY: 10,
              },
            }}
          ></Card>
          <Card
            style=" translate-x-20 translate-y-4 rotate-12 bg-primary"
            motionVariants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
                x: 80,
                rotateZ: 20,
                transition: { duration: 0.3 },
                translateY: 10,
              },
            }}
          ></Card>
          <Card
            front={{
              style: "bg-black text-yellow-500",
              content: "Front Side",
            }}
            motionVariants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.1 },
              },
            }}
          ></Card>
        </div>
      </div>
      <div className="h-screen hidden xl:flex justify-center items-center space-x-32 relative">
        <Card
          style="-translate-y-[50%] w-[400px] h-[400px]"
          front={{ style: "bg-blue-500", content: "Frontend" }}
          back={{ content: "BackEnd", style: "bg-red-300" }}
          motionVariants={bigCard}
        ></Card>
        <motion.div id="aboutSection" className="w-1/2">
          <motion.h2
            className={styles.aboutHeading}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 300, transition: { delay: 0.2 } }}
          >
            About
          </motion.h2>
          <motion.p
            className={`${styles.description} px-8 text-justify 2xl:text-3xl`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 300, transition: { delay: 0.3 } }}
            viewport={{ once: true }}
          >
            This is flash card app. You can use it for fun, to pracitce your
            memory or just study!!
          </motion.p>
        </motion.div>
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
