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
                    <p>I build fast, dynamic, and scalable web interfaces using React.js, Next.js, Tailwind CSS, Bootstrap, and modern JavaScript. My focus is on clean architecture, reusable components, and pixel-perfect UI.</p>
                    <p>With real experience building CRM and HRM dashboards, I create intuitive admin panels with:
                        Real-time data visualization,
                        Custom forms & workflows,
                        Role-based access,
                        API-integrated modules,
                        Responsive layouts</p>
                    
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