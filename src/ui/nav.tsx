'use client'

import  { Link } from 'react-scroll';
import Logo from './logo';
import Button from './button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="relative w-full z-20">
            <nav className="fixed right-0 left-0 top-0 py-4 px-5 lg:px-0 flex max-w-7xl justify-between mx-auto items-cente bg-black/30 backdrop-blur-lg">
                <Logo />
                <div 
                className="hidden sm:flex gap-6 lg:gap-10 justify-center items-center text-text-color"
                >
                    <Link
                    to="Features"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
                    Features
                    </Link>
                    <Link
                    to="Benefits"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
                    Benefits
                    </Link>
                    <Link
                    to="About"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
                    About
                    </Link>
                    <Link
                    to="Customers"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
                    Customers
                    </Link>
                    <Link
                    to="Pricing"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
                    Pricing
                    </Link>
                    <Link
                    to="Features"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
                    Features
                    </Link>
                </div>
                <button
                className="sm:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                >
                    {
                        isOpen ? <X size={24} /> : <Menu size={24} />
                    }
                </button>
                {
                    isOpen && (
                        <div 
                        className="absolute w-full left-0 top-10 gap-7 p-5 bg-black min-h-screen flex flex-col text-text-color">
                            <Link
                            to="Features"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            >
                            Features
                            </Link>
                            <Link
                            to="Benefits"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            >
                            Benefits
                            </Link>
                            <Link
                            to="About"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            >
                            About
                            </Link>
                            <Link
                            to="Customers"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            >
                            Customers
                            </Link>
                            <Link
                            to="Pricing"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            >
                            Pricing
                            </Link>
                            <Button
                            varient="secondary"
                            className="w-full flex justify-center items-center"
                            >
                                Contact us
                            </Button>
                        </div>
                    )
                }
                <Button
                varient="secondary"
                className="hidden sm:block"
                >
                    Contact us
                </Button>
                <span className="absolute inset-x-0 top-20 bg-gradient-to-r from-transparent via-neutral-800 to-transparent h-px w-3/4 mx-auto"></span>
            </nav>
        </header>
    )
}

export default Nav;