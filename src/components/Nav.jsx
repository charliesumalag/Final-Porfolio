import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='flex w-full mx-auto justify-between py-12'>
        <h1 className='font-bold text-xl cursor-pointer text-gray-400 hover:text-white transition-all duration-300'>CHARLIE SUMALAG</h1>
        <ul className='flex gap-4 text-lg'>
            <Link to='home' smooth={true} duration={500}>
                <li className='cursor-pointer text-gray-400 hover:text-white transition-all duration-300'>Home</li>
            </Link>
             <Link to='projects' smooth={true} duration={500}>
                <li className='cursor-pointer text-gray-400 hover:text-white transition-all duration-300'>Projects</li>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
                <li className='cursor-pointer text-gray-400 hover:text-white transition-all duration-300'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav
