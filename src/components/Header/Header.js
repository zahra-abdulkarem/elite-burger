import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
    <>
    <header>
      <nav className="nav-bar-1 sticky-top top-5rem">
          <div className="logo">
            <img src={logo} alt="elite burger logo"/>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Menu-container">Menu</Link></li>
            <li><Link to="/About-container">About us</Link></li>
            <li><Link to="/Reviews-container">Reviews</Link></li>
            <li><Link to="/Contact-container">Contact</Link></li>
          </ul>
          <div clas="header-buttons">
            <i className="fas fa-shopping-cart"></i>
          </div>
      </nav>

      <nav className="nav-bar-2 navbar navbar-expand-lg sticky-top top-5rem">
    <div className="container">
      <h4 className='brand-name'>ELITE<span>BURGER</span></h4>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="main">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Our Company</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Ask us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languge
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">English</a></li>
              <li><a className="dropdown-item" href="/">Arabeic</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">other Languge</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control ms-5 me-3" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit"><i className="fas fa-search"></i></button>
        </form>
      </div>
    </div>
</nav>

    </header>
    </>
    )
}

export default Header