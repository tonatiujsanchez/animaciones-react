import { Slides } from "./components"


const images = [
    {
        src:'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Realidad aumentada'
    },
    {
        src:'https://images.pexels.com/photos/5194607/pexels-photo-5194607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'La naturaleza en la tecnología'
    },
    {
        src:'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Espacio tech limpio'
    },
    {
        src:'https://images.pexels.com/photos/7856033/pexels-photo-7856033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'La Tecnología en el entretenimiento'
    },
    {
        src:'https://images.pexels.com/photos/1760826/pexels-photo-1760826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'La tecnología de antes'
    },
    {
        src:'https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'La tecnología en la sociedad'
    },
]

export const SliderApp = () => {
    return (
        <div>
            <Slides
                images={ images }
                interval={2500}
            />
        </div>
    )
}
