import React from 'react'

export const Header = () => {
  return (
    <div className='mb-6 overflow-hidden fixed z-50 w-full px-24 border-white p-4 bg-white flex items-center justify-between'>
      <img  height={60} width={60} src={'/header.jpg'} />
      <div className='flex ml-28 font-medium justify-between w-[50%]'>
        <div>Emotions</div>
        <div>Manifesto</div>
        <div>Self-awareness test</div>
        <div>Work With Us</div>
      </div>
      <div className=' rounded-3xl text-white px-5 py-3 bg-black  '> Download App</div>
    </div>
  )
}

export default Header