"use client"
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation'
import React from 'react'

import '@/app/globals.css'
import Descargar from '@/components/Descargar'
import Carta from '@/app/carta'
import Link from 'next/link'
import Image from 'next/image'
import Contenido from '@/components/Contenido';
import AudioList from '@/data/audiolist';


const audios = () => {

  return (
    <>
      <Navigation/>
      <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/29-1.png')] bg-repeat-x bg-cover bg-bottom pt-48">
        <AudioList />
      </div>
    </>
  )
}

export default audios