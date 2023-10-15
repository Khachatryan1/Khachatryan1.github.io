export type QuestionType = {
    question: string
    A: string
    B: string
    C: string
    D: string
    answer: string
}

export type QuestionPropsType = {
    question: QuestionType
    index: number
    handleAnswer: (question: QuestionType, answer: string) => void
}
  
export type ContextType = {
    questions: QuestionType[]
    point: number
    setPoint: React.Dispatch<React.SetStateAction<number>>
    currentQuestionIndex: number
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>
    questionCount: number
    setQuestionCount: React.Dispatch<React.SetStateAction<number>>
    complexity: string
    setComplexity: React.Dispatch<React.SetStateAction<string>>
    isSlidIn: boolean
    setIsSlidIn: React.Dispatch<React.SetStateAction<boolean>>
    selectedAnswer: string
    setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>
}

export type ComplexityProps = {
    startGame: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
}

export type ResultProps = {
    point: number
    questionCount: number
}

export type SliderProps = {
    slider: number
}
