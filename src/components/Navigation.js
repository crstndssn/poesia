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
            <div className='fixed w-full z-50 top-7 pb-4 md:py-0'>
                <div className="container mx-auto flex items-center justify-between px-5">
                    {isOpen ? (
                        <Image className='w-36 md:w-52 p-1 h-auto opacity-0' src="/logo.png" alt="alt" width={184} height={86} />
                    ) : (<Image className='w-36 md:w-52 p-1 h-auto' src="/logo.png" alt="alt" width={184} height={86} />)}

                    <div className="flex justify-center align-center relative">
                        <Image className='w-16 md:w-24 mr-5 h-max' src="/CULTURAS_COLOR.png" alt="alt" width={184} height={90} />
                        <button
                            className="w-14 h-14 md:w-20 md:h-20 flex justify-center items-center text-black bg-[#FFFFF3] focus:outline-none z-50 border-2 border-black rounded-full md:p-3"
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
            </div>

            {/* Menú de navegación */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 text-cente w-11/12">
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        INICIO
                    </Link>
                    <Link onClick={toggleMenu} href="/cartas" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        CARTAS
                    </Link>
                    <Link onClick={toggleMenu} href="/libro" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        LIBRO
                    </Link>
                    {/* <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        IMAGENES
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        AUDIOS
                    </Link>
                    <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        VIDEOS
                    </Link> */}
                    {/* <Link onClick={toggleMenu} href="/" passHref className={`flex justify-center items-center text-3xl p-3 md:p-7 md:pt-8 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        DOCUMENTOS
                    </Link> */}
                    <Link onClick={toggleMenu} href="/" passHref className={`md:col-span-2 flex justify-center items-center text-3xl p-3 md:p-7 md:pt-88 text-[#FFFFF9] transition-opacity duration-100 border border-[#FFFFF9] rounded-lg opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
                        LINEA DEL TIEMPO
                    </Link>
                </ul>
            </div>
        </>
    );
};




export default Navigation;
