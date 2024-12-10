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
                        <iframe
                            src="https://www.youtube.com/embed/URL_DEL_VIDEO_1"
                            className="w-full rounded shadow-lg"
                            title="Martes de Poesía en la sede La Esperanza"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            src="https://www.youtube.com/embed/URL_DEL_VIDEO_2"
                            className="w-full rounded shadow-lg"
                            title="Video de Martes de Poesía primera sistematización de la experiencia"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            src="https://www.youtube.com/embed/URL_DEL_VIDEO_3"
                            className="w-full rounded shadow-lg"
                            title="Martes De Poesía 3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h2 className="text-3xl font-bold">Encuentro Zonal de Experiencias Pedagógicas Significativas</h2>
                    <section>
                        <iframe
                            src="https://www.youtube.com/embed/URL_DEL_VIDEO_4"
                            className="w-full rounded shadow-lg"
                            title="Encuentro Zonal"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </section>

                    <h2 className="text-3xl font-bold">Foro Educativo 2014</h2>
                    <section>
                        <iframe
                            src="https://www.youtube.com/embed/URL_DEL_VIDEO_5"
                            className="w-full rounded shadow-lg"
                            title="Foro Educativo 2014"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </section>

                </div>
            </div>
        </>
    )
}

export default videos