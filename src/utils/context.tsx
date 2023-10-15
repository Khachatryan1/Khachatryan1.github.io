import { createContext, useEffect, useState } from "react"
import { ContextType, QuestionType } from "./types"
import axios from "axios"


export const QuestionContext = createContext<ContextType>({
    questions: [],
    point: 0,
    setPoint: () => {},
    currentQuestionIndex: 0,
    setCurrentQuestionIndex: () => {},
    questionCount: 0,
    setQuestionCount: () => {},
    complexity: '',
    setComplexity: () => {},
    isSlidIn: false,
    setIsSlidIn: () => {},
    selectedAnswer: '',
    setSelectedAnswer: () => {}
})


export const QuestionContextWrapper = ({children}: { children: React.ReactNode }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [point, setPoint] = useState<number>(0)
    const [questionCount, setQuestionCount] = useState(0)
    const [complexity, setComplexity] = useState<string>('')
    const [isSlidIn, setIsSlidIn] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    
    useEffect(() => {
        if (complexity === 'Easy') {
            setQuestionCount(5)
        } else if (complexity === 'Medium') {
            setQuestionCount(10)
        } else if (complexity === 'Hard') {
            setQuestionCount(20)
        }
    }, [complexity])
    
    

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json')
            .then(res => {
                const selectedQuestions = res.data.sort(() => 0.5 - Math.random()).slice(0, questionCount)
                setQuestions(selectedQuestions)
            })
    }, [questionCount])
      

    const contextValue: ContextType = {
        questions,
        point,
        setPoint,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        questionCount,
        setQuestionCount,
        complexity,
        setComplexity,
        isSlidIn,
        setIsSlidIn,
        selectedAnswer,
        setSelectedAnswer,
    }

    return (
        <QuestionContext.Provider value={contextValue}>
            {children}
        </QuestionContext.Provider>
    )
}