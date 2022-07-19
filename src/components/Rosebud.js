import React, { useEffect } from "react";
import useRosebud from '../hooks/useRosebud'

export default function Rosebud({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useRosebud(solution)

    // Event Listener when player types
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <div>{solution.title}</div>
            <div>{currentGuess}</div>
        </div>
    )
}