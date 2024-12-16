import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='flex justify-between items-center p-3 text-xl'>
                <div>
                    <h1 className='text-green-500 font-extrabold'>PERFUME STORE</h1>
                </div>

                <nav className='hidden md:flex gap-9'>
                    <Link to='/'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>Home</Link>
                    <Link to='/product'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>Product</Link>
                    <Link to='/contact'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>Contact</Link>
                    <Link to='/about'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>About</Link>
                </nav>

                {/* Nav Bar for Mobile */}
                <div className="navbar w-24 sm:w-20 bg-base-100 md:hidden">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>Menu</summary>
                                    <ul className={`bg-slate-100 rounded-t-none p-3 fixed flex flex-col gap-7`}>
                                        <Link to='/' className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>Home</Link>
                                        <Link to='/product'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>Product</Link>
                                        <Link to='/contact'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>Contact</Link>
                                        <Link to='/about'  className='hover:underline hover:decoration-solid hover:decoration-green-400 transition-all '>About</Link>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header