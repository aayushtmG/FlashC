import React from "react"
import { Variants, motion } from "framer-motion"

interface cardProps {
  style?: string
  motionVariants?: Variants
  front?: { style: string; content: string }
  back?: { style: string; content: string }
}
const styles = {
  cardStyles: `w-[300px] h-[350px] text-2xl font-bold  rounded-xl absolute preserve-3d  `,
  defaultFront:
    "backface-hidden absolute  w-full h-full flex justify-center items-center  rounded-xl",
  defaultBack:
    "backface-hidden absolute w-full h-full bg-red-400 flex justify-center items-center flip rounded-xl",
}

export default function Card({
  style,
  motionVariants,
  front,
  back,
}: cardProps) {
  return (
    <motion.div
      className={`${styles.cardStyles} ${style}`}
      variants={motionVariants}
      initial="initial"
      animate="animate"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className={`${front?.style} ${styles.defaultFront} `}>
        {front?.content}
      </div>
      <div className={`${styles.defaultBack}`}>{back?.content}</div>
    </motion.div>
  )
}
