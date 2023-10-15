import {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router'
import {QuestionContext} from '../utils/context'
import { TimerSettings, useTimer } from 'react-timer-hook'

export const Timer = ({ expiryTimestamp }: TimerSettings) => {
    const navigate = useNavigate()
    const {complexity} = useContext(QuestionContext)

    const {
        seconds,
        minutes,
        start,
        pause,
    } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => navigate('result') })

    useEffect(() => {
        if(complexity !== ''){
            start()
        } else {
            pause()
        }
    })

    return (
        <div className='timer-container'>         
            <span className='time'>{String(minutes).padStart(2, '0')[0]}</span>
            <span className='time'>{String(minutes).padStart(2, '0')[1]}</span>
            <span className='dot'>:</span>
            <span className='time'>{String(seconds).padStart(2, '0')[0]}</span>
            <span className='time'>{String(seconds).padStart(2, '0')[1]}</span> 
        </div>
    )
}