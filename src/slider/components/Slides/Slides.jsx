import { useState, useEffect } from "react"
import propTypes from 'prop-types'
import './Slides.css'


export const Slides = ({ images, interval }) => {

    const [activeindex, setActiveindex] = useState(0)
    
    useEffect(()=> {

        const tick = setInterval(()=> {

            if( activeindex < images.length - 1 ){
                setActiveindex(activeindex + 1)
            }else {
                setActiveindex(0)
            }

        }, interval)

        return () => clearInterval(tick)

    },[activeindex, images.lenght, interval]) 

    
    return (
        <div className="slide">
            <div className="slide_container">
                {
                    images.map( (image, index) => (
                        <img 
                            key={ image.src }
                            src={ image.src } 
                            alt={ image.title }
                            className={`slide_container_img ${index === activeindex ? 'animation_show' :'animation_hide'}`}
                        />
                    ))
                }
                <div className="slide_container_title">
                    {
                        images[activeindex].title
                    }
                </div>
              
            </div>
        </div>
    )
}


Slides.defaultProps = {
    images: [{ src:'', title: '' }],
    interval: 2500,
}

Slides.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            src: propTypes.string.isRequired,
            title: propTypes.string.isRequired,
        })
    ),
    interval: propTypes.number
}