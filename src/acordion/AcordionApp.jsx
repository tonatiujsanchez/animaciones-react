
import { Acordion } from "./components"



export const AcordionApp = () => {
    return (
        <div>
            <Acordion
                title="Angular"
                content="El framework de desarrollo web para construir el futuro. Angular lets you start small and supports you as your team and apps grow."
                bgColor={'#DD0031'}
            />
            <Acordion
                title="React"
                content="La biblioteca para interfaces de usuario web y nativas. React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como Thumbnail, LikeButton, y Video. Luego combínalos para formar pantallas, páginas y aplicaciones."
                bgColor={'#087EA4'}
            />
            <Acordion
                title="Vue"
                content="Un marco accesible, eficaz y versátil para crear interfaces de usuario web. An approachable, performant and versatile framework for building web user interfaces." 
                bgColor={'#42B883'}
            />
        </div>
    )
}
