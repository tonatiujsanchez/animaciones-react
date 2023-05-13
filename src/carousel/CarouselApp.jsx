import { Carousel } from "./components"


const images = [
    'https://images.pexels.com/photos/9582359/pexels-photo-9582359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6338207/pexels-photo-6338207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/751694/pexels-photo-751694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5546680/pexels-photo-5546680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12229328/pexels-photo-12229328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/10039446/pexels-photo-10039446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

export const CarouselApp = () => {
    return (
        <Carousel
            images={ images }
        />
    )
}
