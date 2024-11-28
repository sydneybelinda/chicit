import React from 'react'

import Image from 'next/image'
 
export default function  Logo(){
  return (
    // <Image
    //   src="/logo.png"
    //   width={100}
    //   height={33.3}
    //   alt="Chic IT"
    // />

    <div className='logo'>
      CHIC IT
    <div className='logoBottom'>
      Managed IT Services
    </div>
    </div>
  )
}