"use client"
import { useRouter } from "next/navigation"
const styles = {
  wrapper:
    "p-12 shadow-xl rounded-md w-max flex flex-col items-center m-auto my-20 ",
  heading:
    "text-3xl tracking-wider font-custom font-medium text-primary  mb-10 hover:animate-pulse",
  form: "text-primary",
  label: "font-medium  cursor-pointer mb-1",
  inputGroup: " flex flex-col",
  input: "border p-2 rounded-md outline-none",
  error: "text-red-800 text-sm invisible",
  line: "h-[1px] flex-grow bg-black",
  btn: "py-2 text-white w-full rounded-md font-bold tracking-wide  ",
}

export default function Signup() {
  const router = useRouter()
  const handleSignup = () => {}
  const handleLogin = () => {
    router.push("login")
  }
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>FlashC</h3>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input type="text" id="username" className={styles.input} />
            <p className={styles.error}>Invalid Username</p>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input type="email" id="email" className={styles.input} />
            <p className={styles.error}>Invalid Email</p>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input type="password" id="password" className={styles.input} />
            <p className={styles.error}>password error</p>
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
