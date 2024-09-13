import Image from "next/image"
import logo from "../../public/next.svg"
import Link from "next/link"

export default function NavBar() {
  return (
    <header className=" bg-primary text-white">
      <nav className="p-2  mx-auto xl:container font-semibold  flex justify-between items-center ">
        <h2 className="text-2xl font-custom font-medium">
          <Link href={"/"}>FlashC</Link>
        </h2>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={50}
          className="invert hidden xl:block"
        />
        {/* login section  */}
        <div className="space-x-4">
          <button className="hover:text-blue-400 xl:text-lg transition-colors ease-out hover:scale-110">
            <Link href="login">Login</Link>
          </button>
          <button
            className=" border-2 px-4 py-1 -skew-x-6 hover:bg-blue-400 hover:text-primary 
          transition-colors duration-200 hover:scale-105  xl:text-lg"
          >
            <Link href="signup">Signup</Link>
          </button>
        </div>
      </nav>
    </header>
  )
}
