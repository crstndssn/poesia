import { useState, useEffect } from 'react';

export default function CountdownTimer() {
    // Estado para verificar si el componente está montado
    const [isMounted, setIsMounted] = useState(false);

    // Fecha y hora objetivo: 15 de noviembre a las 10:00 a.m.
    const targetDate = new Date('2024-11-15T10:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

    useEffect(() => {
        // Indicar que el componente está montado
        setIsMounted(true);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft(0);
            } else {
                setTimeLeft(difference);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // No renderizar el temporizador hasta que el componente esté montado
    if (!isMounted) return null;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center border-2 border-black rounded-lg py-2 px-3">
                    <span className="text-4xl md:text-5xl font-semibold">{days}</span>
                    <span className="text-xl md:text-xl uppercase">Días</span>
                </div>
                <div className="flex flex-col items-center justify-center border-2 border-black rounded-lg py-2 px-3">
                    <span className="text-4xl md:text-5xl font-semibold">{hours}</span>
                    <span className="text-xl md:text-xl uppercase">Horas</span>
                </div>
                <div className="flex flex-col items-center justify-center border-2 border-black rounded-lg py-2 px-3">
                    <span className="text-4xl md:text-5xl font-semibold">{minutes}</span>
                    <span className="text-xl md:text-xl uppercase">Minutos</span>
                </div>
                <div className="flex flex-col items-center justify-center border-2 border-black rounded-lg py-2 px-3">
                    <span className="text-4xl md:text-5xl font-semibold">{seconds}</span>
                    <span className="text-xl md:text-xl uppercase">Segundos</span>
                </div>
            </div>
        </div>
    );
}
