import React, { useState } from "react"

interface cardProps {
  style?: string
  front?: { style: string; content: string }
  back?: { style: string; content: string }
}

const styles = {
  cardStyles: `w-[300px] h-[350px] text-2xl font-bold absolute rounded-xl preserve-3d cursor-pointer`,
  defaultFront:
    "backface-hidden absolute w-full h-full flex justify-center items-center rounded-xl",
  defaultBack:
    "backface-hidden absolute w-full h-full flex justify-center items-center  rounded-xl flip ",
}

export default function Card({ style, front, back }: cardProps) {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped((prev) => !prev)
  }

  return (
    <div className={`${styles.cardStyles} ${style}`} onClick={handleClick}>
      <div className={`${styles.defaultFront} ${front?.style}  opacity-100 `}>
        {front?.content}
      </div>
      <div className={`${styles.defaultBack} `}>{back?.content}</div>
    </div>
  )
}
