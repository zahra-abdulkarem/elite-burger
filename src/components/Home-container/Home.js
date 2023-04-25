import './Home.css'
import { Homeswiper } from '../index-export-file'
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img4 from '../../images/img-4.jpg'
import img5 from '../../images/img-5.jpg'
import img6 from '../../images/img-6.jpg'
import img19 from '../../images/img-19.jpg'
const Home = () => {
    return (
        <>
        <section className="home">
            <h1 class="title">wellcome to our <span>websaite</span></h1>
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
                <Homeswiper itemClass='carousel-item active' img={img1}                                         p="Elite Burger Restaurant is classNameified as a burger shop,  grilled chicken burger and beef burger, all of them are  delicious, fast delivery, and their prices are very reasonable"/>
                <Homeswiper itemClass='carousel-item'        img={img2} h1="The best dishes in the restaurant"  p="A delicious crispy burger meal, the bread is fresh and cottony,  the chicken is dazzling and delicious, the burger  is light and the price is excellent over the quality, and the hot  and liquid dynamite sauce is the best."/>
                <Homeswiper itemClass='carousel-item'        img={img4} h1="A customer report"                  p="Your burger is awesome, reasonable price, and fast service delivered  to your door. And the food is clean and delicious,  and the quantity is very suitable for the price, and it arrived  quickly, hot, and exactly what I ordered"/>
                <Homeswiper itemClass='carousel-item'        img={img5}                                         p="The best restaurant that serves hot fried potatoes with a variety of  delicious sauces. Do not miss the experience"/>
                <Homeswiper itemClass='carousel-item'        img={img6} />
                <Homeswiper itemClass='carousel-item'        img={img19} />
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        </>
    )
}

export default Home
