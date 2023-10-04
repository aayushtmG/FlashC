import Link from "next/link"
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

export default function Login() {
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
            <p className={styles.error}>Username Error</p>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input type="password" id="password" className={styles.input} />
            <p className={styles.error}>password error</p>
          </div>
          <div className="space-y-4 mt-2">
            <button className={`${styles.btn} bg-blue-500`}>Log in</button>
            <div className="flex items-center">
              <div className={styles.line}></div>
              <div className="mx-2 uppercase font-bold text-sm">or</div>
              <div className={styles.line}></div>
            </div>
            <button className={`${styles.btn} bg-primary`}>
              <Link href="/signup">Sign up</Link>
            </button>
            <button>hello</button>
          </div>
        </form>
      </div>
    </>
  )
}
