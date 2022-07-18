import React, { useEffect } from "react";
import useRosebud from '../hooks/useRosebud'

export default function Rosebud({ solution }) {

    const { currentGuess, handleKeyup } = useRosebud(solution)

    // Event Listener when player types
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>{currentGuess}</div>
    )
}