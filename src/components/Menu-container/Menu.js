import './Menu.css'
import img16 from '../../images/img-16.jpg'
import img20 from '../../images/img-20.jpg'
import {MenuCard} from '../index-export-file'
import menuCardsData from '../../data/menuCardData'


const Menu = () => {
    const menuFood = menuCardsData.map(card => {
        return <MenuCard key={card.id} image={card.image}  h5={card.h5}  span={card.span}/>
    })
    return (
        <>
        <section className="menu" id="menu">
        <h1 className='title'>all <span>Menu</span></h1>
        <div className="all-menu">
            <img src={img16} alt="image one"/>
            <img src={img20} alt="image two"/>
        </div>
        <div className="cards-wapper">
            {menuFood}
        </div>
    </section>
        </>
    )
}

export default Menu
