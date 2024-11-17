import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-4 w-full flex justify-between">

         <div className="flex justify-around md:w-1/4 max-h-28 ml-4 mb-8">
    <Image className='w-36 h-max' src="/BNC_Color.png" alt="alt" width={184} height={90} />
    <Image className='w-36 h-max' src="/RNBP_Color.png" alt="alt" width={184} height={90} />
  </div>

  <div className="mt-10 mr-12">
    <p className="biro text-xl">Érase una vez la poesía ©️ 2024 is licensed under CC BY-NC-SA 4.0</p>
  </div>
    </div>
   
  )
}

export default Footer