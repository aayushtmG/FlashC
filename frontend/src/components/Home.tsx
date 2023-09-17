"use client"
import React from "react"
import Card from "@/components/Card"
import { motion } from "framer-motion"

const styles = {
  heading:
    " text-8xl text-primary font-bold tracking-wide [word-spacing:20px] uppercase",
  description: "text-gray-400 tracking-widest text-2xl italic font-medium mt-2",
  aboutHeading:
    "italic underline  decoration-2 underline-offset-4 tracking-widest font-bold  text-primary pl-8 text-3xl",
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
  return (
    <React.Fragment>
      <div className="p-10 pt-[10%] flex h-screen">
        {/* intro section  wrapper*/}
        <div className="w-2/3 ">
          <div>
            <h1 id="hero-title" className={styles.heading}>
              Welcome to <br className="mb-6" />
              <span className="text-primary italic">Flash Card</span>
            </h1>
            <p className={styles.description}>Your Cards, Your Words</p>
          </div>
        </div>
        {/* Card showcase */}
        <div>
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
              style: "bg-black text-yellow-500 ",
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
      <div className=" h-screen  flex justify-center items-center relative">
        <Card
          style=" -translate-y-[50%] w-[400px] h-[450px]  "
          front={{ style: "bg-blue-500", content: "Frontend" }}
          back={{ content: "BackEnd", style: "bg-red-300" }}
          motionVariants={bigCard}
        ></Card>
        <motion.div id="aboutSection" className=" w-1/2 ">
          <motion.h2
            className={styles.aboutHeading}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 300, transition: { delay: 0.2 } }}
          >
            About
          </motion.h2>
          <motion.p
            className={`${styles.description} px-8 text-justify text-3xl`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 300, transition: { delay: 0.3 } }}
            viewport={{ once: true }}
          >
            This is flash card app. You can use it for fun, to pracitce your
            memory or just study!!
          </motion.p>
        </motion.div>
      </div>
    </React.Fragment>
  )
}

export default Home
