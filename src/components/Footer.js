import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-20 md:bottom-4 w-full flex justify-between items-center flex-col-reverse md:flex-row">
      <div className="flex justify-around items-center mr-20 w-1/4 max-h-28 md:ml-4 md:mb-8">
        <Image className='w-36 h-max' src="/BNC_Color.png" alt="alt" width={184} height={90} />
        <Image className='w-36 h-max' src="/RNBP_Color.png" alt="alt" width={184} height={90} />
      </div>
      <div className="mt-10 mb-2 md:mr-12 text-center">
        <p className="biro text-xl">Érase una vez la poesía ©️ 2024 is licensed under CC BY-NC-SA 4.0</p>
      </div>
    </div>

  )
}

export default Footer