import SkillsCircle from "./SkillsCircle";
import img11 from '../img/new_skills.png'





export default function Skills() {


return( <section className='container pt-5'>
    <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="services_info">
                <h6 className="hr-lines1">My Skill</h6>
                <h1 className="main_font">Develop Skills</h1>
                <p>I've created and updated websites for many different clients. I worked with multiple CMS including WordPress, Joomla, and Drupal, as well as created my own custom website management system in Node.js.</p>
               
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