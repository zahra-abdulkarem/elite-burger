import './Reviews.css'
const Reviews = () => {
    return (
        <>
        <section className="reviews" id="reviews">
        <h1 className="title">our <span>reviews</span></h1>

        <div className="Review-summary">
            
            <div className="summary">
                <p>Review summary</p>
                <div className="progress" role="progressbar" aria-label="Basic example">
                    <div className="progress-bar w-100"></div>
                </div>
    
                <div className="progress" role="progressbar" aria-label="Basic example">
                    <div className="progress-bar w-75"></div>
                </div>
    
                <div className="progress" role="progressbar" aria-label="progress-bar">
                    <div className="progress-bar w-25"></div>
                </div>
    
                <div className="progress" role="progressbar" aria-label="Basic example">
                    <div className="progress-bar w-50"></div>
                </div>
    
                <div className="progress" role="progressbar" aria-label="Basic example">
                    <div className="progress-bar w-2"></div>
                </div>
            </div>
            <div className="Final-evaluation">
                <h2>4.4</h2>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>37 reviews</p>
            </div>
        </div>
    </section>
        </>
    )
}

export default Reviews
