import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-4'>
      <a href="/" >
        <Image
        alt=''
        src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}
        height={50}
        width={50}
        />
      </a>
      <ul className='flex gap-2'>
        <li><a href="">Catálogo</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Contato</a></li>
      </ul>
    </div>
  )
}

export default Navbar