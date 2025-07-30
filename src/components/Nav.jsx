import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Nav = ({isMobile, setIsMobile, menuOpen, setMenuOpen}) => {
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen])

    const closeMenu = () => setMenuOpen(false)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 678px)');

        const handleChange = (e) => setIsMobile(e.matches);
        handleChange(mediaQuery)
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
    return (
        <nav className={clsx('flex w-full mx-auto items-center justify-between py-12')}>
            <h1 className='font-bold font-poppins text-[18px] leading-[1.7em] cursor-pointer text-black'>Charlie Sumalag <span className='w-1.5 h-1.5 bg-[#ff374a] inline-block rounded-full'></span></h1>
            { isMobile ? (
                <>
                    <button onClick={() => setMenuOpen((prev) => !prev)}><i className="fa-solid fa-bars text-sm cursor-pointer"></i></button>
                    {menuOpen && (
                        <ul className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 flex flex-col items-center justify-center space-y-6">{['projects', 'work-experience', 'certificates', 'contact'].map((section) => (
                            <li key={section}>
                                <Link to={section} smooth={true} duration={500} onClick={closeMenu} className="block text-lg uppercase font-roboto text-[#323232] cursor-pointer hover:opacity-70" > {section.replace('-', ' ')}</Link>
                            </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <ul className='flex gap-4 text-lg'>
                    <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>
                        <Link to='projects' smooth={true} duration={500}>Projects </Link>
                    </li>
                    <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>
                        <Link to='work-experience' smooth={true} duration={500}>Work Experience </Link>
                    </li>
                    <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>
                        <Link to='certificates' smooth={true} duration={500}>Certificates</Link>
                    </li>
                    <li className='cursor-pointer tracking-[0.6px] uppercase font-roboto text-[#323232] text-[12px]'>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Nav
