import { useContext, useEffect } from "react"
import { QuestionPropsType } from "../utils/types"
import { QuestionContext } from "../utils/context"

export const Question = ({ question, index, handleAnswer }: QuestionPropsType) => {
    const { isSlidIn, setIsSlidIn, 
        selectedAnswer, setSelectedAnswer } = useContext(QuestionContext)
    
    useEffect(() => {
        setTimeout(() => {
            setIsSlidIn(true)
        }, 200)
        
        return () => setIsSlidIn(false)
    }, [])

    const checkAnswer = (selected: string, correct: string) => {
        return selected === correct ? 'right-answer' : 'wrong-answer'
    }

    return (
        <div className={`question-container ${isSlidIn ? 'slide-in' : ''}`}>
            <div className="question-title">
                <h3>QUESTION: №{index + 1}</h3>
                <h2>{question?.question}</h2>
            </div>
            <div className="answer-block">
                <p className={`answer-option ${selectedAnswer === 'A' ? checkAnswer('A', question.answer) : ''}`}
                    onClick={() => {
                        handleAnswer(question, 'A')
                        setSelectedAnswer('A')
                }}><span className="test">A:</span> <span>{question?.A}</span></p>
                
                <p className={`answer-option ${selectedAnswer === 'B' ? checkAnswer('B', question.answer) : ''}`}
                    onClick={() => {
                        handleAnswer(question, 'B')
                        setSelectedAnswer('B')
                }}><span className="test">B:</span> <span>{question?.B}</span></p>
                
                <p className={`answer-option ${selectedAnswer === 'C' ? checkAnswer('C', question.answer) : ''}`}
                    onClick={() => {
                        handleAnswer(question, 'C')
                        setSelectedAnswer('C')
                }}><span className="test">C:</span> <span>{question?.C}</span></p>
                
                <p className={`answer-option ${selectedAnswer === 'D' ? checkAnswer('D', question.answer) : ''}`}
                    onClick={() => {
                        handleAnswer(question, 'D')
                        setSelectedAnswer('D')
                }}><span className="test">D:</span> <span>{question?.D}</span></p>
            </div>
        </div>
    )
}