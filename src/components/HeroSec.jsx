import React from 'react'
import Hero from './/Hero'
import Title from "./Title";
import Stack from "./Stack";
import clsx from 'clsx';

const HeroSec = () => {
  return (
    <section id='home' className=''>
          <Hero />
          <div className={clsx('mt-22', 'max-md:text-center')}>
            <Title text='TECH STACK' />
            <Stack />
          </div>
        </section>
  )
}

export default HeroSec
