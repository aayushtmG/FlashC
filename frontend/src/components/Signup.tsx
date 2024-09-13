"use client"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
const styles = {
  wrapper:
    "p-12 shadow-xl rounded-md w-max flex flex-col items-center m-auto my-20 ",
  heading:
    "text-3xl tracking-wider font-custom font-medium text-primary  hover:animate-pulse text-center",
  form: "text-primary",
  label: "font-medium  cursor-pointer mb-1",
  inputGroup: " flex flex-col",
  input: "border p-2 rounded-md outline-none",
  error: "text-red-800 text-sm",
  line: "h-[1px] flex-grow bg-black",
  btn: "py-2 text-white w-full rounded-md font-bold tracking-wide  ",
  description: "text-gray-400 tracking-widest italic  text-sm mt-1",
}

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleSignup = async () => {
    try {
      const newUser = await axios.post(
        "http://127.0.01:8000/api/users/signup",
        {
          username,
          email,
          password,
        }
      )
      console.log("created user", newUser)
      router.push("/")
    } catch (err: AxiosError | any) {
      const errorMessage = err.response.data.message
      if (errorMessage.split(" ").includes("Duplicate")) {
        const element = errorMessage
          .split(" ")
          [errorMessage.split(" ").length - 1].split(".")[1]
        setError(`${element.slice(0, -1)} already exists!`)
      }
    }
  }
  const handleLogin = () => {
    router.push("login")
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className="mb-5">
          <h3 className={styles.heading}>Sign Up</h3>
          <p className={styles.description}>Get started with FlashC</p>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className={styles.error}>{error}</p>
          </div>
          <div className="space-y-4 mt-2  ">
            <button
              className={`${styles.btn} bg-primary`}
              onClick={handleSignup}
            >
              Signup
            </button>
            <div className="flex items-center">
              <div className={styles.line}></div>
              <div className="mx-2 uppercase font-bold text-sm">or</div>
              <div className={styles.line}></div>
            </div>
            <button
              type="button"
              className={`${styles.btn} bg-blue-500`}
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
