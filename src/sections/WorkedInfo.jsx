import './workInfo.css';
import img1 from'../img/work.jpg';
import dmt from '../img/dmt1.png';
import crys from '../img/crys.png'
import sassol from '../img/s1.png';
//import img2 from '../img/creative_genie.png'
import img2 from '../img/creative.jfif';


export default function AboutSection() {

 return(<section className="container pt-5 pb-5">

        <div className="row">
            <div className="col-md-6">
                <div>
                <img src={img1} alt="" className="img-fluid"/>
                </div>
                
            </div>
            <div className="col-md-6">

                <div className="work_info">
                    <h6 className="hr-lines">Companies worked</h6>
                    <h1 className="main_font">companies I have work with</h1>
                    <p>
                        Over the past Four years, I’ve been working as a Web Developer,
                         gaining hands-on experience with multiple modern frameworks and technologies.
                          I’m passionate about building high-quality, scalable, and user-friendly products with 
                          a strong focus on clean design and seamless user experience.
                         My goal is always to deliver solutions that not only meet requirements but also delight users.
                    </p>
                    
                </div>

                <div className="company_images work_info">
                    <div className="c_images"><img src={crys} alt="" className='img-fluid' /></div>
                    <div className="c_images"><img src={dmt} alt="" className='img-fluid' /></div>
                    <div className="c_images"><img src={sassol} alt="" className='img-fluid' /></div>
                    <div className="c_images"><img src={img2} alt="" className='img-fluid' /></div>

                </div>

            </div>
        </div>

        </section>)





}