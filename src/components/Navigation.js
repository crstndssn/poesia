import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Header fijo */}
            <div className='fixed w-full border-b-2 border-black mb-10 bg-[#E7DCD1] z-50'>
                <div className="container mx-auto flex items-center justify-between">
                    <Image className='w-8 h-8 ml-2 md:w-10 md:h-10' src="/decoration.svg" alt="alt" width={20} height={20} />
                    <Image className='w-48 p-1 h-auto' src="/logo.png" alt="alt" width={20} height={20} />
                    <button
                        className="text-black focus:outline-none z-50"
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <svg
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M4 6h16M4 12h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú de navegación */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <ul className="grid grid-cols-2 space-y-8 text-center">
                    <li className={`text-5xl text-[#FFFFF9] transition-opacity duration-100 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">INICIO</span>
                        </Link>
                    </li>
                    <li className={`text-5xl text-[#FFFFF9] transition-opacity duration-100 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/cartas" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">CARTAS</span>
                        </Link>
                    </li>
                    <li className={`text-5xl text-[#FFFFF9] transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/imagenes" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">IMAGENES</span>
                        </Link>
                    </li>
                    <li className={`text-5xl text-[#FFFFF9] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/audios" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">AUDIOS</span>
                        </Link>
                    </li>
                    <li className={`text-5xl text-[#FFFFF9] transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/videos" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">VIDEOS</span>
                        </Link>
                    </li>
                    <li className={`text-5xl text-[#FFFFF9] transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/documentos" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">DOCUMENTOS</span>
                        </Link>
                    </li>
                    <li className={`col-span-2 text-5xl text-[#FFFFF9] transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        <Link href="/tiempo" passHref>
                            <span onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">LINEA DEL TIEMPO</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;
