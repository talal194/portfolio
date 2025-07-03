import React, { useState } from 'react';
import './projectsSection.css'; // Create this CSS file
import p1 from '../img/p1.jpg';


const ProjectCard = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className={`project-image ${isHovered ? 'fade-out' : ''}`} 
        
      />
      {/* <div  */}
      <div className={`project-content ${isHovered ? 'fade-up' : ''}`}>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <button className="project-button">View Project</button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  
  const projects = [
    {
      id:1,
      title: 'Web Design',
      description: 'Responsive website design with modern aesthetics',
      imageUrl: p1,
    },
    {
      id:2,
      title: 'Mobile App',
      description: 'Cross-platform mobile application development',
      imageUrl:p1,
    },
    {
      id:3,
      title: 'E-commerce',
      description: 'Online shopping platform with payment integration',
      imageUrl: p1
    },
    {
      id:4,
      title: 'E-commerce',
      description: 'Online shopping platform with payment integration',
      imageUrl: p1
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
      <div className="row">
      <div className='text-center pb-5'>
      <div className="section_center"><h6 className="hr-lines1">Portfolio</h6></div>
      <h1 className="main_font">Recent Projects</h1>
      </div>  
      {projects.map((project) => (
      <div key={project.id} className='col-lg-6 mb-5'>
        <ProjectCard {...project} />
      </div>
      ))}
        <div className="col-lg-12 text-center"><button className="btn btn2">Show More</button></div>
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;