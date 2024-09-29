// import React, { useState } from "react"
import { Variants } from "framer-motion"

interface cardProps {
  style?: string
  motionVariants?: Variants
  front?: { style: string; content: string }
  back?: { style: string; content: string }
}
// const styles = {
//   cardStyles: `w-[300px] h-[350px] text-2xl font-bold absolute  rounded-xl preserve-3d  `,
//   defaultFront:
//     "backface-hidden absolute  w-full h-full flex justify-center items-center  rounded-xl",
//   defaultBack:
//     "backface-hidden absolute w-full h-full bg-red-400 flex justify-center items-center flip rounded-xl",
// }

// export default function Card({
//   style,
//   motionVariants,
//   front,
//   back,
// }: cardProps) {
//   const [flipped, setFlipped] = useState(false)

//   const handleClick = () => {
//     setFlipped((prev) => !prev)
//   }

//   return (
//     <motion.div
//       className={`${styles.cardStyles} ${style} `}
//       variants={motionVariants}
//       initial="initial"
//       animate="animate"
//       whileInView="show"
//       viewport={{ once: true }}
//     >
//       <div className={`${front?.style} ${styles.defaultFront} `}>
//         {front?.content}
//       </div>
//       <div className={`${styles.defaultBack}`}>{back?.content}</div>
//     </motion.div>
//   )
// }

// import React, { useState } from "react"
// import { Variants, motion } from "framer-motion"

// interface cardProps {
//   style?: string
//   motionVariants?: Variants
//   front?: { style: string; content: string }
//   back?: { style: string; content: string }
// }

// const styles = {
//   cardStyles: `w-[300px] h-[350px] text-2xl font-bold absolute rounded-xl preserve-3d cursor-pointer`,
//   defaultFront:
//     "backface-hidden absolute w-full h-full flex justify-center items-center rounded-xl",
//   defaultBack:
//     "backface-hidden absolute w-full h-full bg-red-400 flex justify-center items-center  rounded-xl",
// }

// export default function Card({
//   style,
//   motionVariants,
//   front,
//   back,
// }: cardProps) {
//   const [flipped, setFlipped] = useState(false)

//   const handleClick = () => {
//     setFlipped((prev) => !prev)
//   }

//   return (
//     <motion.div
//       className={`${styles.cardStyles} ${style}`}
//       variants={motionVariants}
//       initial="initial"
//       animate="animate"
//       whileInView="show"
//       viewport={{ once: true }}
//       onClick={handleClick}
//     >
//       <div
//         className={`${front?.style} ${styles.defaultFront} ${
//           flipped ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         {front?.content}
//       </div>
//       <div
//         className={`${styles.defaultBack} ${
//           flipped ? "opacity-100 text-black backface-visible " : "opacity-0"
//         }`}
//       >
//         {back?.content}
//       </div>
//     </motion.div>
//   )
// }

const bigCard = {
  initial: {
    opacity: 0,
    x: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  flip: {
    rotateY: [0, 180],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}
import React, { useState } from "react"
import { motion } from "framer-motion"

interface CardProps {
  style?: string
  front?: { style: string; content: string }
  back?: { style: string; content: string }
}

const styles = {
  cardStyles: `w-[300px] h-[350px] relative rounded-xl cursor-pointer`,
  defaultFront:
    "backface-hidden absolute w-full h-full flex justify-center items-center rounded-xl bg-blue-500",
  defaultBack:
    "backface-hidden absolute w-full h-full bg-red-400 flex justify-center items-center rounded-xl",
}

export default function Card({ style, front, back }: CardProps) {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped((prev) => !prev) // Toggle the flipped state
  }

  return (
    <motion.div
      className={`${styles.cardStyles} ${style}`}
      variants={bigCard}
      initial="initial"
      animate={flipped ? "flip" : "show"}
      onClick={handleClick}
      style={{ perspective: "1000px" }} // Ensure perspective is applied
    >
      <motion.div
        className={`${styles.defaultFront}`}
        style={{
          backfaceVisibility: "hidden",
          opacity: flipped ? 0 : 1,
          position: "absolute", // Ensure proper positioning
        }}
      >
        {front?.content}
      </motion.div>
      <motion.div
        className={`${styles.defaultBack}`}
        style={{
          backfaceVisibility: "hidden",
          opacity: flipped ? 1 : 0,
          transform: "rotateY(180deg)", // Rotate back face
          position: "absolute", // Ensure proper positioning
        }}
      >
        {back?.content}
      </motion.div>
    </motion.div>
  )
}
