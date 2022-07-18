import { useState } from 'react';

const useRosebud = (solution) => {

    // Create variables for implementing game logic
    const [turn, setTurn] = useState(0) // Maintain a count of number of guesses used
    const [currentGuess, setCurrentGuess] = useState('') // Store current guess
    const [guesses, setGuesses] = useState([]) // Convert guess to array
    const [history, setHistory] = useState([]) // Collection of guess strings
    const [isCorrect, setIsCorrect] = useState(false) // True when player submits the correct answer

    // Function to convert a guess into an array of letters with associated color codes
    const formatGuess = () => {
        let solutionArray = [...solution.title]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // Find correct matches - color Green
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // Find misplaced letters - color Blue
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'blue'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // Maintain a history of guesses
    // Add a guess to that
    // Check isCorrect and if false, add one to the turn
    const addNewGuess = () => {

    }

    // Collect and track player input
    // End guess when player hits 'enter'
    const handleKeyup = ({ key }) => {
        // Accept guess
        if (key === 'Enter') {
            if (turn > 5) {
                console.log("Guesses over")
                return
            }

            // Duplicates not allowed
            if (history.includes(currentGuess)) {
                console.log("Tried already")
                return
            }

            if (currentGuess.length !== solution.title.length) {
                console.log("Length not equal")
                return
            }

            const formatted = formatGuess()
            console.log(formatted)
        }

        // Allow backspace/delete
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z0-9]$/.test(key)) {
            if (currentGuess.length < solution.title.length) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useRosebud