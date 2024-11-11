"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Carta from '@/app/carta.js'; // Usa este import para el componente Carta
import Cartas from '@/app/cartas.js'; // Parece que también estás importando Cartas, asegúrate de usarlo si es necesario

import Navigation from '@/components/Navigation.js'
import Descargar from '@/components/Descargar.js'
import Contenido from '@/components/Contenido'

const documentos = () => {

  return (
    <div className="">
      <Navigation/>
      <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/39.png')] bg-repeat-x bg-cover bg-bottom">documentos</div>
    </div>
  )
}

export default documentos