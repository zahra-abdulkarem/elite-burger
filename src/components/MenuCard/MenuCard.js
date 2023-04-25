import './MenuCard.css'

const MenuCard = (props) => {
    return (
    <div className="card bg-light">
        <div className='image'><img src={props.image} className="card-img-top" alt='Eilet burger menu'/></div>
        <div className="card-body">
            <h5 className="card-title">{props.h5}</h5>
            <p className="card-text">Onions, tomatoes, lettuce, cheese and sauces</p>
            <a href="./" className="btn primary-btn">more details</a>
            <span>{props.span}</span>
        </div>
    </div>
)
}

export default MenuCard