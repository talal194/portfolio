import "./hero.css";
import img11 from '../img/talal2.png';
import resume from "../assets/Talal__Ahmed.pdf";


export default function Hero(){


const MyButton= () => {

    window.open(resume, "_blank"); 

}

return(
<section className="hero">
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="main_hero">
        
        {/* <h6>Welcome to ReactProx</h6> */}
        <h1 className="main_font"><span className="main_font">Hello, I'm </span> Talal Ahmed</h1>
        <h6 className="main_font">FRONT-END DEVELOPER | BUILDING MODERN & SCALABLE WEB SOLUTIONS  </h6>
        <p> I have 4+ years of experience creating responsive, user-friendly, and high-performing web applications.  
Specialized in ReactJS, JavaScript, HTML/CSS, Bootstrap, and Tailwind. </p>
        {/* <p>test</p> */}
        <div className="hero_btns"> 
        <button className="btn  btn1" onClick={MyButton}>Let’s turn your ideas into reality!</button>
        {/* <button className="btn  btn2">Contact Us</button> */}
        
        </div>
            
            </div>
        </div>
        <div className="col-md-6">

                <div><img src={img11} className="img-fluid" /></div>
        </div>
    </div>
    </div>
</section>
)
     







    
}