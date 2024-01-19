import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
    let [open,setOpen]=useState(false);
  return (
    <React.Fragment>
        <nav className="mx-auto max-w-7xl w-full px-5 pt-2 sm:px-8 md:px-14 lg:px-5 flex justify-between items-center">
            <div className='text-2xl font-black'>
                Chat Advisor
            </div>
            <div
                className={`duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5 00 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                <ul className="z-40 flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <NavLinks />
                    {/* <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li> */}
                </ul>

                <ul
                    className={`z-40
                    md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}
                    `}
                >
                    <li>
                        <a href="#" className="py-7 px-3 inline-block">
                        Home
                        </a>
                    </li>
                    <NavLinks />
                    <div className="py-5">
                        {/* <Button /> */}
                        <button
                        className="px-5 py-2 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                                bg-[#a6c1ee] border-transparent hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] min-w-max text-white"
                        >
                        <span className="relative z-[5]">
                            Sign in
                        </span>
                        </button>
                    </div>
                    </ul>
            </div>
            <div className="flex items-center gap-6">
                <button
                    className="px-5 py-2 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                            after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                            bg-[#a6c1ee] border-transparent hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] min-w-max text-white"
                  >
                    <span className="relative z-[5]">
                        Sign in
                    </span>
                  </button>
                <button onClick={()=>setOpen(!open)} className="fixes z-50 text-3xl cursor-pointer md:hidden">
                <FaBars />
                </button>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar