import { setState } from 'react';

const useWordle = (solution) => {

    // Create variables for implementing game logic
    const [turn, setTurn] = useState(0) // Maintain a count of number of guesses used
    const [currentGuess, setCurrentGuess] = useState('') // Store current guess
    const [guesses, setGuesses] = useState([]) // Convert guess to array
    const [history, setHistory] = useState([]) // Collection of guess strings
    const [isCorrect, setIsCorrect] = useState(false) // True when player submits the correct answer

    // Function to convert a guess into an array of letters with associated color codes
    const formatGuess = () => {

    }

    // Maintain a history of guesses
    // Add a guess to that
    // Check isCorrect and if false, add one to the turn
    const addNewGuess = () => {

    }

    // Collect and track player input
    // End guess when player hits 'enter'
    const handleKeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle