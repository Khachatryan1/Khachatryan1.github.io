import { useContext, useEffect } from 'react'
import { useNavigate } from "react-router"
import { ResultProps } from "../utils/types"
import { QuestionContext } from "../utils/context"


export const Result = ({point, questionCount}: ResultProps) => {
    const navigate = useNavigate()
    const {setIsSlidIn, isSlidIn} = useContext(QuestionContext)

    useEffect(() => {
        setTimeout(() => {
            setIsSlidIn(true)
        }, 200)
    }, [])

    const restart = () => {
        navigate('/')
        window.location.reload()
    }

    return (
        <div className={`result-container ${isSlidIn ? 'slide-in' : ''}`}>
            <h2>Your results</h2>
            <div className="results">
                <p>complexity: <span className="results-span">{questionCount === 5? 'Easy' : questionCount === 10? 'Medium': 'Hard'}</span></p>
                <p>number of questions: <span className="results-span">{questionCount}</span></p>
                <p>number of correct answers: <span className="results-span">{point}</span></p>
                <p>number of incorrect answers: <span className="results-span">{questionCount - point}</span></p>
                <p>conclusion: <span className="results-span">{`${(questionCount / 2) >= point ? 'not bad but you need to practice 👎' : 'very good you are very smart  👍'}`}</span></p>
            </div>
            <button className="restart-button" onClick={restart}>try again</button>
        </div>
    )
}