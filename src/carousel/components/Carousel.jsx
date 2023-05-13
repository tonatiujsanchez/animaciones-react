import { useState } from "react"
import propTypes from "prop-types"

import { TransitionGroup, CSSTransition } from "react-transition-group"

import './Carousel.css'

export const Carousel = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [directionSlide, setDirectionSlide] = useState('right')


    const left = () => {
        setDirectionSlide('right')
        if( activeIndex > 0){
            setActiveIndex( activeIndex - 1 )
        }else {
            setActiveIndex( images.length - 1 )
        }
    }

    const right = () => {
        setDirectionSlide('left')
        if( activeIndex < images.length - 1 ){
            setActiveIndex( activeIndex + 1 )
        }else{
            setActiveIndex( 0 )
        }
    }

    return (
        <div className="carousel">
            <div className="carousel_buttons">
                <button onClick={ left }> Previus </button>
                <button onClick={ right }> Next </button>
            </div>
            <TransitionGroup>
                <CSSTransition
                    timeout={1000}
                    classNames={directionSlide === "right" ? "slideRight" : "slideLeft"}
                    key={ activeIndex }
                >
                    <img 
                        src={images[activeIndex]} 
                        alt="Imagen de animal"
                        className="carousel_img"
                    />
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

Carousel.defaultProps = {
    images:[]
}

Carousel.propTypes = {
    images: propTypes.arrayOf(
        propTypes.string
    )
}