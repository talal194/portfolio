import './services.css';
import Card from './Card';

export default function Services(){

//let img = <i className='bi bi-laptop'></i>;

let service_info = [

{title:'Web Application',img:<i className='bi bi-laptop'></i>},
{title:'UI Design and Optimization',img:<i class="bi bi-wrench-adjustable"></i>},
{title:'CMS development',img:<i class="bi bi-wordpress"></i>},
{title:'Single Page Applications',img:<i class="bi bi-file-text-fill"></i>},


]


    return(<section className="container pt-5 pb-5">

        <div className="row">
            <div className="col-md-6">

                <div className="services_info">
                    <h6 className="hr-lines1">Services</h6>
                    <h1 className="main_font">What I Porvide</h1>
                    <p>I've created and updated websites for many different clients. I worked with multiple CMS including WordPress, Joomla, and Drupal, as well as created my own custom website management system in Node.js.</p>
                    <p>A part of the team that has built the front-end for an enterprise-level web application in AngularJS. I've been a part of a team that has built.</p>
                    <button className="btn  btn2">Download CV</button>
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