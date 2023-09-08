import React, { useRef } from 'react'
import Confetti from 'canvas-confetti';
import Styles from '../styles/FiestaEffect.module.css'

export const FiestaEffect = ({children}) => {
    const confettiRef = useRef(null);

    const handleConfetti = () => {
        const canvas = confettiRef.current;

        if (canvas) {
            const myConfetti = Confetti.create(canvas, {
                resize: true,
            });

            myConfetti({
                particleCount: 100, // Cantidad de partículas de confeti
                spread: 200, // Área de dispersión
                startVelocity: 20, // Velocidad inicial
                gravity: 1, // Gravedad
                colors: ['#ff0000', '#00ff00', '#0000ff'], 
                origin: {x:0,y:0 },// Colores de las partículas
            });

        }
    };

    return (
        <div>
            <button onClick={handleConfetti}>{children}</button>
            <canvas ref={confettiRef} className="mt--100" />
        </div>
    )
}
