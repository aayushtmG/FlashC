import Image from "next/image"
import logo from "../../public/next.svg"
import Link from "next/link"

export default function NavBar() {
  return (
    <header className=" bg-primary -skew-x-12 text-white">
      <nav className="p-4 w-11/12 m-auto font-semibold text-lg flex justify-between items-center ">
        <h2 className="text-2xl font-custom font-medium">FlashC</h2>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={50}
          className=" invert"
        />
        {/* login section  */}
        <div className="space-x-4">
          <button className="hover:text-blue-400  transition-colors ease-out hover:scale-110">
            <Link href="login">Login</Link>
          </button>
          <button
            className=" border-2 px-4 py-1 -skew-x-6 hover:bg-blue-400 hover:text-primary 
          transition-colors duration-200 hover:scale-105"
          >
            SignUp
          </button>
        </div>
      </nav>
    </header>
  )
}
