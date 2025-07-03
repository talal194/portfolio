import './contact.css';


export default function Contact(){

return(<section className='contact'>
        <div className="container">
            <div className="row">
                
                <div className="col-md-6">
                    <div className="contact_info">
                        <h6 className="hr-lines1">Contact</h6>
                        <h1 className="main_font">Get in Touch</h1>
                        <p>Feel free to contact me for any queries or project proposals.</p>

                        <div className="contact_form">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                       
                    </div>
                </div>
                <div className="col-md-6">
                   
                </div>


</div>
</div>
</section>)



}