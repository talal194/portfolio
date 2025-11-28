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
                        <p>I am a front-end developer with 4 years of professional experience, specializing in building modern, responsive, and high-performance web applications. I’ve created and updated websites for various clients using WordPress and have built multiple custom front-end solutions from scratch.</p>
                        <h1 className="main_font">What I Can Do</h1>
                        <p>I develop powerful and scalable web solutions using React.js, Next.js, React-Bootstrap, and Tailwind CSS. I have extensive experience working on CRM systems, HRM dashboards, admin panels, and data visualization interfaces with advanced graph and chart integrations.
I’ve also contributed to enterprise-level front-end development teams, delivering clean, fast, and user-friendly interfaces.</p>
                        <h1 className="main_font">Always Evolving</h1>
                        <p>I follow modern digital trends and continuously upgrade my skills. I’m a fast learner, a team player, and comfortable working in fast-paced environments. My focus is on writing clean, efficient code and delivering visually appealing, high-quality designs.</p>
                        
                    </div>

                </div>
            </div>

            </section>)


    
    
    
    }