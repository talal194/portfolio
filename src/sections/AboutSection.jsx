    import './about_section.css';
    import img from '../img/about1.png';

    
    export default function AboutSection() {

     return(<section className="container pt-5 pb-5">

            <div className="row">
                <div className="col-md-5">
                    <div className='about_img'><img src={img} alt="" className='img-fluid' /></div>
                </div>
                <div className="col-md-7">

                    <div className="about_info">
                        <h6 className="hr-lines">About</h6>
                        <h1 className="main_font">Who am i</h1>
                        <p>I've created and updated websites for many different clients. I worked with multiple CMS including WordPress, Joomla, and Drupal, as well as created my own custom website management system in Node.js.</p>
                        <h1 className="main_font">I Can Develop Anything You Want</h1>
                        <p>A part of the team that has built the front-end for an enterprise-level web application in AngularJS. I've been a part of a team that has built.</p>
                        <h1 className="main_font">I can follow digital Trends</h1>
                        <p>I am a quick learner and always eager to learn new technologies. I am a team player and can work in a fast-paced environment.</p>
                        
                    </div>

                </div>
            </div>

            </section>)


    
    
    
    }