import React, { useState } from 'react';
import './projectsSection.css';
import p1 from '../img/p11.png';
import p2 from '../img/p22.png';
import p3 from '../img/p33.png';
import p4 from '../img/p44.png';
import p5 from '../img/p55.png';
import p6 from '../img/p66.png';
import p7 from '../img/p77.png';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imageUrl, url }) => {
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
      <div className={`project-content ${isHovered ? 'fade-up' : ''}`}>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <Link
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Finance Dashboard',
      description:
        'A responsive and modern dashboard built with ReactJS and Bootstrap, featuring dynamic charts, tables, and reusable components for seamless data management.',
      imageUrl: p2,
      url: 'https://dashboard367.netlify.app/',
    },
    {
      id: 2,
      title: 'Single Page Application',
      description:
        'Tech Orbit – A sleek single-page ReactJS application designed for speed and smooth navigation. Built with reusable components and modern UI for a seamless user experience.',
      imageUrl: p1,
      url: 'https://tech-orbit.netlify.app/',
    },
    {
      id: 3,
      title: 'Quiz App',
      description: 'An interactive ReactJS Quiz App that challenges users with engaging questions and instantly displays results. Built for speed, simplicity, and fun learning.',
      imageUrl: p3,
      url: 'https://online-quizes.netlify.app/',
    },
    {
      id: 4,
      title: 'Shinra Solution',
      description: 'A modern business website built on WordPress with a focus on professional design, smooth navigation, and responsive layouts. The site highlights services, projects, and company insights while ensuring a user-friendly experience across all devices',
      imageUrl: p4,
      url: 'https://shinrasolution.com/',
    },
    {
      id: 5,
      title: 'Crafting Clean & Impactful Website',
      description: 'A professional WordPress website showcasing clean, responsive, and user-friendly designs. Built for performance, simplicity, and an impressive online presence.',
      imageUrl: p5,
      url: 'https://ladyandthegentcc.com/',
    },
    {
      id: 6,
      title: 'Assignment Mentor UK',
      description: 'A professional academic writing service delivering high-quality, customized, and plagiarism-free assignments. Built for reliability, clarity, and student success.',
      imageUrl: p6,
      url: 'https://assignmentmentor.co.uk/',
    },
    {
      id: 7,
      title: 'Landing Page ',
      description: 'A responsive Bootstrap landing page showcasing fun attractions. Book your ticket, unlock the excitement, and enjoy everything for free!',
      imageUrl: p7,
      url: 'https://the-groves.netlify.app/',
    },
  
  ];

  const [visibleCount, setVisibleCount] = useState(2); // Show 2 projects initially

  const handleToggle = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(projects.length); // Show all projects
    } else {
      setVisibleCount(2); // Collapse back to first 2
    }
  };

  return (
    <section className="projects-section">
      <div className="container">
        <div className="row">
          <div className="text-center pb-5">
            <div className="section_center">
              <h6 className="hr-lines1">Portfolio</h6>
            </div>
            <h1 className="main_font">Recent Projects</h1>
          </div>
          {projects.slice(0, visibleCount).map((project) => (
            <div key={project.id} className="col-lg-6 mb-5">
              <ProjectCard {...project} />
            </div>
          ))}
          <div className="col-lg-12 text-center">
            <button onClick={handleToggle} className="btn btn2">
              {visibleCount < projects.length ? 'Show More' : 'Show Less'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;






// import React, { useState } from 'react';
// import './projectsSection.css'; // Create this CSS file
// import p1 from '../img/p11.png';
// import p2 from '../img/p22.png';
// import p3 from '../img/p33.png';
// import p4 from '../img/p44.png';
// import {Link} from 'react-router-dom';

// let des1 = <p></p>


// const ProjectCard = ({ title, description, imageUrl,url }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="project-card"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img 
//         src={imageUrl} 
//         alt={title} 
//         className={`project-image ${isHovered ? 'fade-out' : ''}`} 
        
//       />
//       {/* <div  */}
//       <div className={`project-content ${isHovered ? 'fade-up' : ''}`}>
//         <h3 className="project-title">{title}</h3>
//         <p className="project-description">{description}</p>
//         <Link to={url} target="_blank" rel="noopener noreferrer" className="project-button">View Project</Link>
//       </div>
//     </div>
//   );
// };

// const ProjectsSection = () => {
  
//   const projects = [
//     {
//       id:1,
//       title: 'Finance Dashboard',
//       description:'A responsive and modern dashboard built with ReactJS and Bootstrap, featuring dynamic charts, tables, and reusable components for seamless data management.',
//       imageUrl: p2,
//       url:'https://dashboard367.netlify.app/'
//     },
//     {
//       id:2,
//       title: 'Single Page Application',
//       description: 'Tech Orbit – A sleek single-page ReactJS application designed for speed and smooth navigation. Built with reusable components and modern UI for a seamless user experience.',
//       imageUrl:p1,
//        url:'https://tech-orbit.netlify.app/'
//     },
//     {
//       id:3,
//       title: 'E-commerce',
//       description: 'Online shopping platform with payment integration',
//       imageUrl: p3,
//        url:'https://online-quizes.netlify.app/'
//     },
//     {
//       id:4,
//       title: 'E-commerce',
//       description: 'Online shopping platform with payment integration',
//       imageUrl: p4,
//        url:'https://shinrasolution.com/'
//     }
//   ];

//   return (
//     <section className="projects-section">
//       <div className="container">
//       <div className="row">
//       <div className='text-center pb-5'>
//       <div className="section_center"><h6 className="hr-lines1">Portfolio</h6></div>
//       <h1 className="main_font">Recent Projects</h1>
//       </div>  
//       {projects.map((project) => (
//       <div key={project.id} className='col-lg-6 mb-5'>
//         <ProjectCard {...project} />
//       </div>
//       ))}
//         <div className="col-lg-12 text-center"><button className="btn btn2">Show More</button></div>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;