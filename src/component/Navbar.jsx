import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-auto flex justify-between items-center p-9'>
        <div className="logo text-2xl font-bold">
            FutureForward
        </div>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>Problems</li>
            <li>About Us</li>
        </ul>
        <div className="button ">
            <button className="log-in mr-5 border py-2 px-4">LogIn</button>
            <button className="join-free bg-red-500 text-white py-2 px-4">Join For Free</button>
        </div>
    </div>
  )
}

export default Navbar;
