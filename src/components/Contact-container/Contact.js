import './Contact.css'
const Contact = () => {
    return (
    <section className="contact" id="contact">
        <h1 className='title'><span>Contact</span> us</h1>
        <div className="contact-container">
            <div className="contact-wapper">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-5">
                    <label for="exampleFormControlTextarea1" className="form-label">your message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
    
                <div className="mb-5 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Are you shur you want send this?</label>
                </div>
                <button type="submit" className="btn primary-btn ms-5">send</button>
            </div>
    
            <div className="our-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14850.242743382387!2d39.9405045!3d21.4857476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c1ff2cbc6a598b%3A0x221f40178893b23a!2z2KXZhNmK2Kog2KjYsdis2LE!5e0!3m2!1sen!2ssa!4v1679081612018!5m2!1sen!2ssa" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
    )
}

export default Contact
