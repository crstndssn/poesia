"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Navigation from '@/components/Navigation.js'
import Descargar from '@/components/Descargar.js'
import Contenido from '@/components/Contenido'

const nosotros = () => {

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#fffff9]">

      <div className="w-full">

        <Navigation />

        <Contenido />

        <Descargar />

      </div>
    </div>
  )
}

export default nosotros