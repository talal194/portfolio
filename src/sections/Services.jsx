import './services.css';
import Card from './Card';
import resume from "../assets/Talal__Ahmed.pdf";

export default function Services(){

//let img = <i className='bi bi-laptop'></i>;

const MyButton = ()=>{
    window.open(resume, "_blank"); 
}

let service_info = [

{title:'Web Development',img:<i className='bi bi-laptop'></i>},
{title:'UI/UX Design Implementation',img:<i class="bi bi-wrench-adjustable"></i>},
{title:'API Integration',img:<i class="bi bi-wordpress"></i>},
{title:'Single Page Applications (SPA)',img:<i class="bi bi-file-text-fill"></i>},


]


    return(<section className="container pt-5 pb-5">

        <div className="row">
            <div className="col-md-6">

                <div className="services_info">
                    <h6 className="hr-lines1">Services</h6>
                    <h1 className="main_font pt-3">Web Development</h1>
                    <p>Custom websites & dashboards using ReactJS, PHP, MySQL.</p>
                    <h1 className="main_font">UI/UX Design Implementation</h1>
                    <p>Transforming Figma/Adobe XD into pixel-perfect responsive layouts.</p>
                    <h1 className="main_font">API Integration</h1>
                    <p>Seamless REST API integration for data-driven applications.</p>
                    <h1 className="main_font">Single Page Applications (SPA)</h1>
                    <p>Modern, fast, and scalable front-end applications.</p>
                    <button className="btn  btn2" onClick={MyButton}>Download CV</button>
                </div>

            </div>
            <div className="col-md-6">
                <div className="row">

                {
                    service_info.map((el,key)=>(
                        <Card title={el.title} img={el.img} key={key}/>
                    ))
                }

                </div>

               

                
                
                    {/* <div className="col-md-6">
                    <div className="card" >
                        <div className="card-body text-center">
                        <div className='icon_div'>{img}</div>
                            <h5 className="card-title service_title">web site</h5>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="card" >
                        <div className="card-body text-center">
                        <div className='icon_div'>{img}</div>
                            <h5 className="card-title service_title">web site</h5>
                        </div>
                        </div>
                    </div> */}

            </div>

           
            </div>
            

            </section>)




}