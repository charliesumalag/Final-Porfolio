import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='flex w-full mx-auto justify-between py-12'>
        <h1 className='font-bold font-poppins text-[18px] leading-[1.7em] cursor-pointer text-black'>Charlie Sumalag <span className='w-1.5 h-1.5 bg-[#ff374a] inline-block rounded-full'></span></h1>
        <ul className='flex gap-4 text-lg'>
            <Link to='projects' smooth={true} duration={500}>
                <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>Projects</li>
            </Link>
            <Link to='work-experience' smooth={true} duration={500}>
                <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>Work Experience</li>
            </Link>
            <Link to='certificates' smooth={true} duration={500}>
                <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>Certificates</li>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
                <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav
