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
                        <p>
                        I'm a passionate front-end developer with experience in creating dynamic and responsive web applications. I specialize in HTML, CSS, JavaScript, and React.js. I love turning ideas into reality using code and am always eager to learn new technologies and improve my skills.I am a Front-End Web Developer with expertise in ReactJS, JavaScript, and modern frameworks.  
                        Over the last 4+ years, I’ve developed CRM, HRM, and e-commerce applications, integrating REST APIs, optimizing performance, and delivering user-centered designs.  
                        I enjoy solving problems, learning new technologies, and transforming ideas into interactive digital experiences.  
                        </p>
                        {/* <h1 className="main_font">I Can Develop Anything You Want</h1>
                        <p>A part of the team that has built the front-end for an enterprise-level web application in AngularJS. I've been a part of a team that has built.</p>
                        <h1 className="main_font">I can follow digital Trends</h1>
                        <p>I am a quick learner and always eager to learn new technologies. I am a team player and can work in a fast-paced environment.</p> */}
                        
                    </div>

                </div>
            </div>

            </section>)


    
    
    
    }