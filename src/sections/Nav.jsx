

import './nav.css';



export default function Nav(){

return(<section className="container">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="hrefggle navigation">
        <span className="navbar-hrefggler-icon"></span>
      </buthrefn>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="#project">Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="#contact" >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>    
    </section>)



}