import React from 'react'
import Hero from './/Hero'
import Title from "./Title";
import Stack from "./Stack";

const HeroSec = () => {
  return (
    <section id='home' className=''>
          <Hero />
          <div className='mt-22'>
            <Title text='TECH STACK' />
            <Stack />
          </div>
        </section>
  )
}

export default HeroSec
