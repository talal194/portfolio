import './contact.css';
import img21 from '../img/get_in_touch.png';


export default function Contact(){

return(<section className='contact'>
        <div className="container py-5">
            <div className="row">
                
                <div className="col-md-6">
                    <div className="contact_info1">
                        <h6 className="hr-lines1">Contact</h6>
                        <h1 className="main_font">Get in Touch</h1>
                        <p>Feel free to contact me for any queries or project proposals.</p>
                        <div className="contact_form">
                        <form>
                            <div className="form-group mb-3">
                                <input type="text" className="main_font form-control form-control-lg" placeholder="Your Name"/>
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" className="main_font form-control form-control-lg" placeholder="Your Email"/>
                            </div>
                            <div className="form-group mb-3">
                                <textarea className=" main_font form-control form-control-lg" rows={6} placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn2" style={{width:'100%'}}>Send Message</button>
                        </form>
                    </div>
                        
                    </div>
                </div>
                <div className="col-md-6">

                    <div><img src={img21} className='img-fluid' alt="" /></div>
                    
                </div>


</div>
</div>
</section>)



}