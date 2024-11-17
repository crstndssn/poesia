import React from 'react'
import '@/app/globals.css'
import Navigation from '@/components/Navigation'
import CountdownTimer from '@/components/CountdownTimer'

const videos = () => {
    return (
        <>
            <Navigation />
            <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/24.png')] bg-repeat-x bg-cover bg-center"> <CountdownTimer /> </div>
        </>
    )
}

export default videos