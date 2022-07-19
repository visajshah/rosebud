import { useState } from 'react';

const useRosebud = (solution) => {

    // Create variables for implementing game logic
    const [turn, setTurn] = useState(0) // Maintain a count of number of guesses used
    const [currentGuess, setCurrentGuess] = useState('') // Store current guess
    const [guesses, setGuesses] = useState([...Array(6)]) // Convert guess to array
    const [history, setHistory] = useState([]) // Collection of guess strings
    const [isCorrect, setIsCorrect] = useState(false) // True when player submits the correct answer
    const [usedKeys, setUsedKeys] = useState({}) // Store data of used keys

    // Function to convert a guess into an array of letters with associated color codes
    const formatGuess = () => {
        let solutionArray = [...solution.title]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // Find correct matches - color Orange
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'orange'
                solutionArray[i] = null
            }
        })

        // Find misplaced letters - color Blue
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'orange') {
                formattedGuess[i].color = 'blue'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // Maintain a history of guesses
    // Add a guess to that
    // Check isCorrect and if false, add one to the turn
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution.title) {
            setIsCorrect(true)
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}

            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key]

                // Color keys
                if (l.color === 'orange') {
                    newKeys[l.key] = 'orange'
                    return
                }
                if (l.color === 'blue' && currentColor !== 'orange') {
                    newKeys[l.key] = 'blue'
                    return
                }
                if (l.color === 'grey' && currentColor !== 'orange' && currentColor !== 'blue') {
                    newKeys[l.key] = 'grey'
                    return
                }
            })

            return newKeys
        })

        setCurrentGuess('')
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

            if (currentGuess.length > solution.title.length) {
                console.log("Length greater")
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
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
                    return prev + key.toUpperCase()
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}

}

export default useRosebud