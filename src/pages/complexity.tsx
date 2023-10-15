import { useContext } from "react"
import { ComplexityProps } from "../utils/types"
import { QuestionContext } from "../utils/context"

export const Complexity = ({startGame}: ComplexityProps) => {
    const {complexity} = useContext(QuestionContext)

    return(
        <div className={`complexity-page ${complexity ? 'slide-out': ''}`}>
            <h1 >Let's start the quiz</h1>
            <h2>Please select a difficulty level</h2>
            <div className="complexity-container">
                <p className="complexity-button" onClick={(e) => startGame(e)}>Easy</p>
                <p className="complexity-button" onClick={(e) => startGame(e)}>Medium</p>
                <p className="complexity-button" onClick={(e) => startGame(e)}>Hard</p>
            </div>
        </div>
    )
}