import SkillsCircle from "./SkillsCircle";
import img11 from '../img/new_skills.png'





export default function Skills() {


return( <section className='container pt-5'>
    <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="services_info">
                <h6 className="hr-lines1">My Skill</h6>
                <h1 className="main_font">Develop Skills</h1>
                <p>I have extensive experience in building and maintaining websites for various clients. I specialize in front-end development using modern technologies and frameworks. I am skilled at creating responsive, user-friendly, and visually appealing websites, with a strong focus on delivering seamless user experiences and custom front-end solutions when needed.</p>
               
            </div>
        <SkillsCircle/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="services_img">
                <img src={img11}  alt="skills"  className="img-fluid"/>
            </div>
        </div>
    </div>
</section>)



}