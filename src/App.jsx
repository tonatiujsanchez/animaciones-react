import { useState } from 'react'
import './App.css'
import './animations.css'


const Header = ({ show }) => {

    const clases = show
        ? 'header header-active'
        : 'header'

    return (
        <header className={clases}>
            <h1>
                Transiciones CSS en linea
                <span role='img' aria-label='fire'>
                    🔥
                </span>
            </h1>
        </header>
    )
}





function App() {

    const [active, setActive] = useState(false)

    const toggle = () => setActive(!active)

    return (
        <div>
            <button onClick={toggle}>
                {active ? 'Desactivar' : 'Activar'}
            </button>
            <Header show={active} />
        </div>
    )
}

export default App
