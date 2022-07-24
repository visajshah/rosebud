import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">{solution.movie}</p>
                    <p>Directed by: {solution.director}</p>
                    if ({turn} === 1) {
                        <p>You found the solution in {turn} guess :)</p>
                    }
                    else {
                        <p>You found the solution in {turn} guesses :)</p>
                    }
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Out of tries!</h1>
                    <p className="solution">{solution.movie}</p>
                    <p>Directed by: {solution.director}</p>
                    <p>Better luck next time.</p>
                </div>
            )}
        </div>
    )
}