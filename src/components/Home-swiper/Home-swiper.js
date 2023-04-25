
import './Home-swiper.css'

const Homeswiper = (props) => {
    return (
        <div className={props.itemClass}>
            <img src={props.img} className="d-block w-200" alt="home swiper images"/>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
    )
}

export default Homeswiper