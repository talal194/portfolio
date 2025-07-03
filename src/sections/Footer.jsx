import './footer.css';

import {Link} from 'react-router-dom';
let phone = <i class='bi bi-telephone-fill'></i>;
let email = <i class="bi bi-envelope-fill"></i>;
let location = <i class="bi bi-geo-alt-fill"></i>;
let linkedin = <i class="bi bi-linkedin"></i>;
let facebook = <i class="bi bi-facebook"></i>;
let twitter = <i class="bi bi-twitter"></i>;


export default function Footer(){


return(<><section className="footer">
        <div className="container">
        <div className="row">
            <div className="col-lg-4">
                 <div className="info_footer">
                 <h5></h5>
                     <p className='pt-2'>I've been working as web developer for the past two years,
                         and have experience in multiple frameworks.</p>
                 </div>
            </div>
            <div className="col-lg-4">
                <div className="contact_info">
                    <h5 className='main_font'>Contact Us</h5>
                    <ul>
                        <li><Link to="tel:+92 3111083050"> {phone} +92 3111083050</Link></li>
                        <li><Link to="mailto:talalahmed367@gmail.com">{email} talalahmed367@gmail.com</Link></li>
                        <li><Link to="#">{location} abc street</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="contact_info">
                    <h5 className='main_font'>Links</h5>
                    <ul className='links'>
                        <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/about"> About</Link></li>
                        <li><Link to="/services"> Services</Link></li>
                        <li><Link to="/projects"> Projects</Link></li>
                       
                    </ul>
                </div>
            </div>
            <div className="col-lg-2">
            <div className="social_info">
                    <h5 className='main_font'>Social Links</h5>
                    <div className="social_links">
                        <Link to="#"> {linkedin}</Link>
                        <Link to="#">{twitter} </Link>
                        <Link to="#">{facebook} </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>  
      </section>
      <div className='footer_end pt-3 pb-3'>
            <div className="container">
                <div className="col-lg-12 d-flex justify-content-center align-items-center">
            <p className='ft_end'>© 2025 All Rights Reserved. Designed by Talal Ahmed</p>
            </div>
            </div>
            
        </div>

</>
      
    )




}