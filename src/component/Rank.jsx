import React from 'react'
import img1 from '../assets/student-1.png'
import img2 from '../assets/student-2.png'
import img3 from '../assets/student-3.png'
import trophy from '../assets/trophy.png'

export const Rank = () => {
  return (
    <div className="rank-container p-[150px]">
        <div className="content">
            <h2 className='text-8xl font-semibold'>Top Credit Holders</h2>
            <p className='text-3xl ml-5 mt-3'>Based on Number of Problems Solved</p>
            <div className="buttons mt-9">
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>6th</button>
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>7th</button>
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>8th</button>
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>9th</button>
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>10th</button>
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>11th</button>
                <button className='border rounded-xl py-3 px-8 mr-2 text-2xl'>12th</button>
            </div>
        </div>
        <div className="img-conatiner flex justify-around h-auto  mt-[50px]">
            <div className="img-1 bg-red-500 h-[400px] w-[300px] rounded-xl">
            <img src={img1} alt="" className='h-[100%] object-cover'/>
            <p className='text-center mt-1 font-bold'>Rakesh</p>
                <div className="credit flex items-center justify-center">
                    <div className="img-credit h-[50px] flex justify-center items-center border rounded-xl px-5 mt-1">
                        <img src={trophy} alt="" className='h-[100%] '/>
                        <p className='text-2xl font-semibold'>2500</p>
                    </div>
                </div>
            </div>
            <div className="img-2 bg-red-500 h-[400px] w-[300px] rounded-xl">
                <img src={img2} alt="" className='h-[100%] object-cover'/>
                <p className='text-center mt-1 font-bold'>Anushka</p>
                <div className="credit flex items-center justify-center">
                    <div className="img-credit h-[50px] flex justify-center items-center border rounded-xl px-5 mt-1">
                        <img src={trophy} alt="" className='h-[100%]'/>
                        <p className='text-2xl font-semibold'>2200</p>
                    </div>
                </div>
            </div>
            <div className="img-3 bg-red-500 h-[400px] w-[300px] rounded-xl">
                <img src={img3} alt="" className='h-[100%] object-cover'/>
                <p className='text-center mt-1 font-bold'>Doss</p>
                <div className="credit flex items-center justify-center">
                    <div className="img-credit h-[50px] flex justify-center items-center border rounded-xl px-5 mt-1">
                        <img src={trophy} alt="" className='h-[100%]'/>
                        <p className='text-2xl font-semibold'>2100</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Rank;