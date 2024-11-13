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
            <div className='fixed w-full z-50 top-4'>
                <div className="container mx-auto flex items-center justify-between">
                    {isOpen ? (
                        <Image className='w-52 p-1 h-auto  opacity-0' src="/logo.png" alt="alt" width={184} height={86} />
                    ) : (<Image className='w-52 p-1 h-auto' src="/logo.png" alt="alt" width={184} height={86} />)}
                    <button
                        className="text-black bg-[#FFFFF3] focus:outline-none z-50 border-2 border-black rounded-full p-3"
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
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 text-center">
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        INICIO
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        CARTAS
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        IMAGENES
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        AUDIOS
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        VIDEOS
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        DOCUMENTOS
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`md:col-span-2 flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        LINEA DEL TIEMPO
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`md:col-span-2 flex justify-center items-center text-3xl p-7 pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        PRÓXIMAMENTE
                    </Link>
                </ul>
            </div>
        </>
    );
};




export default Navigation;
