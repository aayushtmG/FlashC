import React from "react"
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6"

const styles = {
  wrapper:
    " bg-primary mt-10 p-4  px-10 flex max-sm:flex-col-reverse max-sm:gap-4 items-center justify-between text-white",
  content: "font-bold",
  linkContainer: "flex justify-between gap-10",
  iconLink:
    "text-2xl 3xl:text-3xl hover:fill-blue-400 hover:scale-110 hover:-translate-y-1 duration-300  ",
}

function Footer() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.content}>
        Created by :
        <span className="xl:text-2xl 3xl:text-3xl ml-4">Aayush Tamang</span>
      </h2>
      <ul className={styles.linkContainer}>
        <li>
          <a href="#">
            <FaGithub className={styles.iconLink} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook className={styles.iconLink} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaXTwitter className={styles.iconLink} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
