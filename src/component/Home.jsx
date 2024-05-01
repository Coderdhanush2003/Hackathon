import React from 'react'
import img from '../assets/envirnment.png'
export const Home = () => {
  return (
    <div className="Container flex flex-col items-center justify-center h-auto">
    <div className="content text-center ">
      <h1 className='text-8xl max-w-4xl font-semibold'>Solve Problems and Forward your future</h1>
      <p className='text-lg max-w-4xl mt-5'>We provide a platform where students can hone their skills, tackle real-world problems, and participate in weekly contests, paving the way for a brighter tomorrow.</p>
      <button className="join-free bg-red-500 text-white py-2 px-4 mt-4">Explore Now!</button>
    </div>
    <div className="img-container mt-8 rounded-[10px]">
      <img src={img} alt="Environment" className='rounded-[15px]'/>
    </div>
  </div>
  )
}

export default Home;