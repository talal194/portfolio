//import {Link} from 'react-router-dom';
import {Link} from 'react-scroll';
import './nav.css';



export default function Nav(){

return(<section className="container">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#"></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="services" smooth={true} duration={500}>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact" >Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>    
    </section>)



}