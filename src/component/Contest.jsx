import React from 'react'
import contest from '../assets/leaderboard.png'

export const Contest = () => {
  return (
    <div className="contest-container flex bg-red-400 h-screen">
        <div className="contest-img h-[500px] w-[900px] border">
            <img src={contest} alt="" className='h-[100%]'/>
        </div>
        <div className="contest-content text-center">
        <h2 className='text-8xl font-semibold'>Join Weekly Contest</h2>
        <p className='text-3xl mt-3 max-w-[850px]'>Compete against fellow students and aim to reach the top of the leaderboard to win exciting prizes in our weekly contests.</p>
        </div>
    </div>
  )
}

export default Contest;