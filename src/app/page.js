
"use client"
import { useState } from 'react';

import React from 'react'
import Navigation from '@/components/Navigation.js'
import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';

import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="min-h-screen flex items-center md:items-start justify-center bg-[#fffff9] bg-[url('/38.png')] bg-no-repeat bg-cover bg-bottom"> <Navigation />
      <div className="container mx-auto flex flex-col justify-center items-center max-h-screen md:min-h-[80vh] gap-10 mt-7 md:mt-[30px] mb-24">
        <div className="flex justify-center items-center">
          <p className="text-base md:text-[23px] leading-6 text-center px-4">Su pasión por la vida y la palabra poética han hecho de ella, además de poeta, una investigadora constante, maestra por vocación, tallerista y conferencista internacional.
          Creadora y directora de la Red de Amor y Poesía, con más de tres mil suscriptores en trece países, promueve la escucha y lectura de poemas a través de WhatsApp y de Youtube.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
