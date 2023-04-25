import './About.css'
import img23 from '../../images/img-23.jpg'
import img8 from '../../images/img-8.jpg'
import img26 from '../../images/img-26.jpg'
import img9 from '../../images/img-9.jpg'
const About = () => {
    return (
        <>
        <section className="about">
        <h1 className="title"><span>about</span> us</h1>
        <div className="accordion accordion-flush" id="bt-faq">
            <div className="accordion-item">
                <h3 className="accordion-header" id="faq-one">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#unswer-one">Halal pure beef</button>
                </h3>

                <div className="accordion-collapse collapsed" id="unswer-one" data-bs-parent="bt-faq">
                    <img src={img23} alt=""/>
                    <p>All meat offered by Elite Burger is 100% pure and halal, free from preservatives, additives and artificial flavors. The beef is brought from New Zealand and packaged in certified local factories. In addition to the checks that meat undergoes before it reaches the factories, our suppliers are required to perform additional quality assurance checks on each shipment. We are keen to grill the beef until it is cooked on both sides, without adding fat or oils, and making sure to maintain the specified temperature throughout the grilling period to ensure the safety of the meat and its delicious taste.</p>
                </div>
            </div>


            <div className="accordion-item">
                <h3 className="accordion-header" id="faq-two">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#unswer-two">bread</button>
                </h3>

                <div className="accordion-collapse collapsed" id="unswer-two" data-bs-parent="bt-faq">
                    <img src={img8} alt=""/>
                    <p>Elite Burger sources its bread from regional suppliers who use high-quality wheat in their preparation.</p>
                </div>
            </div>


            <div className="accordion-item">
                <h3 className="accordion-header" id="faq-three">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#unswer-three">fried potato</button>
                </h3>

                <div className="accordion-collapse collapsed" id="unswer-three" data-bs-parent="bt-faq">
                    <img src={img26} alt=""/>
                    <p>Elite Burger French Fries, famous for its distinctive flavor, are produced from high-quality potatoes that are specially grown on farms approved by the Food and Drug Authority around the world. Only vegetable oil is used in the frying process, without adding any artificial fats or flavors, and salt is added only after cooking.</p>
                </div>
            </div>

            <div className="accordion-item">
                <h3 className="accordion-header" id="faq-four">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#unswer-four">Sauces</button>
                </h3>

                <div className="accordion-collapse collapsed" id="unswer-four" data-bs-parent="bt-faq">
                    <img src={img9} alt=""/>
                    <p>Sauces are considered one of the complementary dishes for the main meals, and they provide a tastier and more delicious flavor to the meals, but when talking about the types of sauces, they cannot be limited to a small list, but among the most important types of sauces we have are ranch sauce, dynamite, garlic, and delicious cheese sauce, all of which are very fresh and prepared with great care.</p>
                </div>
            </div>

        </div>
    </section>
        </>
    )
}

export default About
