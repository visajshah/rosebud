import React, { useEffect } from "react";
import useRosebud from '../hooks/useRosebud'
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Rosebud({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useRosebud(solution)

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
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}