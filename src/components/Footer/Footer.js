import './Footer.css'
import logo from './../../images/logo.png'
import img22 from './../../images/img-22.jpg'

const Footer = () => {
    return (
    <>
    <footer className="footer">
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <img src={logo} className="logo" alt='logo'/>
                </div>
                <div className='footer-col'>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="http//">+568430115</a></li>
                        <li><a href="http//Eliteburger@gmail.com">@Eliteburger</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Our Company</h4>
                    <ul>
                        <li><a href="/">Our Company</a></li>
                        <li><a href="/">Our Community</a></li>
                        <li><a href="/">Our History</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>get help</h4>
                    <ul>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">shipping</a></li>
                        <li><a href="/">returns</a></li>
                        <li><a href='/'>order status</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>follow us</h4>
                    <div className='social-links'>
                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="/"><i className="fa-brands fa-snapchat"></i></a>
                    </div>
                </div>
                <div className='footer-col'>
                    <h4>Our restaurant</h4>
                    <img src={img22} className="stor-view" alt='location of eliet burger'/>
                </div>
            </div>
        </div>
        <div className="copy-right">
            © 2023 zahra abduolkerem. All Rights Reserved
        </div>
    </footer>
    </>
    )
}

export default Footer