import React from 'react'
import '@/app/globals.css'
import Navigation from '@/components/Navigation'

const videos = () => {
    return (
        <>
            <Navigation />
            <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/24.png')] bg-repeat-x bg-cover bg-center"> <Countimer /> </div>
        </>
    )
}

export default videos