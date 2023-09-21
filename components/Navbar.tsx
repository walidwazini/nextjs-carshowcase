import Link from "next/link"
import Image from "next/image"
import { FaCar } from 'react-icons/fa'

import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 " >
      <nav className="nav__link" >
        <Link href={'/'} className="flex justify-center items-center " >
          <FaCar size={36} />
        </Link>
        <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="text-primary-blue rounded-xl bg-white min-w-[130px] "
        />
      </nav>
    </header>
  )
}

export default Navbar