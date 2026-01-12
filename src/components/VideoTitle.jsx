import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-full aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div>
            <button className='bg-white text-black p-3 px-10 text-xl rounded-lg hover:bg-white/80 cursor-pointer'>⯈ Play</button>
            <button className='bg-gray-500/50 text-white p-3 mx-2 px-10 text-xl rounded-lg hover:bg-gray-500/30 cursor-pointer'>🛈 More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle