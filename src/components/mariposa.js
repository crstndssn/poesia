// components/Butterfly.js
import { useEffect, useState, useRef } from 'react';
import styles from './Butterfly.module.css';

export default function Butterfly() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const pathLength = path.getTotalLength();

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = scrollPosition / maxScroll;
            const point = path.getPointAtLength(pathLength * scrollFraction);

            setPosition({ x: point.x, y: point.y });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <svg className={styles.hiddenSvg}>
                <path ref={pathRef} d="M 10 300 Q 150 10, 300 300 T 600 300 Q 750 590, 900 300" />
            </svg>
            <div
                className={styles.butterfly}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                🦋
            </div>
        </>
    );
}
