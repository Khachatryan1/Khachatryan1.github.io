import { SliderProps } from "../utils/types"

export const Slider = ({slider}: SliderProps) => {
    return (
        <div className='slider-container'>
            <div className='slider' style={{width: `${slider}%`}}></div>
        </div>
    )
}