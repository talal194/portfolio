import "./hero.css";
import img11 from '../img/talal2.png';

export default function Hero(){

return(
<section className="hero">
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="main_hero">
        
        {/* <h6>Welcome to ReactProx</h6> */}
        <h1 className="main_font"><span className="main_font">Hello, I'm </span> Talal Ahmed</h1>
        <h6 className="main_font">A PASSIONATE FRONTEND DEVELOPER WITH 4+ YEARS OF EXPERIENCE  </h6>
        <p>I craft modern, responsive, and high-performance web interfaces that blend clean design with smooth user experiences. With a strong focus on React.js, Next.js, Tailwind CSS, and UI component libraries, I build fast, scalable, and visually engaging digital products. </p>
        {/* <p>test</p> */}
        <div className="hero_btns"> 
        <button className="btn  btn1">Let’s turn your ideas into reality!</button>
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