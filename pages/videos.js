import React from 'react'
import '@/app/globals.css'
import Navigation from '@/components/Navigation'
import CountdownTimer from '@/components/CountdownTimer'

const videos = () => {
    return (
        <>
            <Navigation />
            <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/24.png')] bg-repeat-x bg-cover bg-center">
                <div className="container mx-auto flex flex-col mt-40">
                    <h2 className="text-3xl font-bold">Martes de Poesia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <video controls className="w-full rounded shadow-lg">
                            <source src="/videos/Martes-de-Poesía-en-la-sede-La-Esperanza.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <video controls className="w-full rounded shadow-lg">
                            <source src="/videos/Video-de-Martes-de-Poesia-primera_sistematización-de-la-experiencia_.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <video controls className="w-full rounded shadow-lg">
                            <source src="/videos/MartesDePoesia_3.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <h2 className="text-3xl font-bold">Encuentro Zonal de Experiencias Pedagógicas Significativas</h2>
                    <section className="">
                        video section
                    </section>

                    <h2 className="text-3xl font-bold">Foro Educativo 2014</h2>
                    <section className="">
                        video section
                    </section>
                </div>
            </div>
        </>
    )
}

export default videos