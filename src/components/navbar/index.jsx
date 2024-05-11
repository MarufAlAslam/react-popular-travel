import React from 'react'
import { FaBars } from 'react-icons/fa';
import { HiOutlineBell } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className='nav bg-[#1f2937] py-5'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <button className='md:hidden block text-white'>
                        <FaBars />
                    </button>
                    <div className="hidden md:flex justify-start items-center gap-12">
                        <a href="/" className='text-white opacity-70 text-lg'>
                            Dashboard
                        </a>
                        <a href="/" className='text-white opacity-100 text-lg'>
                            Master Price
                        </a>
                        <a href="/" className='text-white opacity-70 text-lg'>
                            Custom Price
                        </a>
                        <a href="/" className='text-white opacity-70 text-lg'>
                            Calendar
                        </a>
                        <a href="/" className='text-white opacity-70 text-lg'>
                            Reports
                        </a>
                    </div>

                    <div className="flex justify-end items-center gap-6">
                        <a href="/" className='text-white opacity-70 text-2xl'>
                            <HiOutlineBell />
                        </a>
                        <a href="/" className='text-white text-2xl'>
                            <img className='w-[40px] h-[40px] object-cover rounded-full' src="https://media.licdn.com/dms/image/C4E03AQEWcyyTtJJHmQ/profile-displayphoto-shrink_800_800/0/1624997315849?e=2147483647&v=beta&t=Q9tW1arqv82Waj09Td5vYvw2fmmMFY2Ar_TpfQ5YCQM" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar