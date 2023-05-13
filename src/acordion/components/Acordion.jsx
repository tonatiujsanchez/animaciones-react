import { useRef, useState } from "react"
import ArrowIcon from '/icons/arrow.svg'

export const Acordion = ({ title, content, bgColor }) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const contentRef = useRef()

    const panelStyles = {
        background: bgColor,
        borderRadius: '0.3em',
        color: '#FFF',
        padding: '0.5em 1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        // userSelect: 'none',
        // msUserSelect: 'none'
    }
    
    const contentStyles = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px',
        overflow: 'hidden',
        marginTop: '-5px',
        padding: isExpanded ? '0.5em 1em' : '0em 1em',
        border: isExpanded ? `1px solid ${ bgColor }` : '1px solid transparent',
        transition: 'all 350ms ease-out',
    }

    const imageStyles = {
        width: '16px',
        transform: isExpanded ? 'rotate(90deg': 'rotate(0)',
        transition: 'transform 250ms ease'
    }

    const toggle = () => {
        setIsExpanded( !isExpanded )
    }

    return (
        <div style={{ marginBottom: '1em', maxWidth: '20em' }}>
            <div
                style={panelStyles} 
                onClick={ toggle }
            >
                <span>{ title }</span>
                <img 
                    src={ArrowIcon}
                    alt="Icono de flecha"
                    style={imageStyles}
                />
            </div>
            <div style={contentStyles} 
                ref={contentRef}
            >
                { content }
            </div>
        </div>
    )
}

Acordion.defaultProps = {
    title: '',
    conten: '',
    bgColor: '#222'
}