import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './projectsSection.css'; // Create this CSS file

import p1 from '../img/d1.png';
import p2 from '../img/d2.png';
import p3 from '../img/d3.png';
import p4 from '../img/d4.png';
import p5 from '../img/d5.png';
import p6 from '../img/d6.png';
import p7 from '../img/d7.png';
import p8 from '../img/d8.png';

const ProjectCard = ({ title, description, imageUrl,Url }) => {
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
        <Link to={Url}  target="_blank" className="project-button">View Project</Link>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id:1,
      title: 'Super Admin Dashboard',
      description: `I’m building a Super-Admin interface in a Next.js + Tailwind app that can manage dashboards and assign chatbots to teams, users, or dashboards. The Super-Admin role is the highest-level account: it sees global usage, configures dashboards, provisions/assigns 
      chatbots, and controls access and audit logging. 
      user : m.zunainkhan3@gmail.com
      pass : HelLo@12345`,
      imageUrl: p1,
      Url: 'https://agent-builder-coral.vercel.app/'
    },
    {
      id:2,
      title: 'Admin Dashboard',
      description: `A clean and powerful Admin Dashboard built with Next.js and Tailwind CSS. It includes full WhatsApp integration (link business numbers, manage messages, handle API keys) and Chat Widget integration (embed, customize, and manage website chat widgets). All configuration is handled through a smooth, responsive, and user-friendly admin panel.
      user: markmikitus@logoin60.com
      pass: mark123456`,
      imageUrl:p2,
      Url: 'https://dashboard.kogents.com/logo-in-60-v1/'
    },
    {
      id:3,
      title: 'Kogents AI Agent',
      description: `Kogents.ai delivers intelligent AI agents that work 24/7—learning, adapting, and improving performance. The platform’s front end is built with Next.js and Tailwind CSS, providing a fast, clean, and responsive user experience for managing AI workflows and automation.`,
      imageUrl: p3,
      Url: 'https://kogents.ai/chatbot/briefv2/'
    },
    {
      id:4,
      title: 'Finance Dashboard',
      description: `A responsive and modern dashboard built with ReactJS and Bootstrap, featuring dynamic charts, tables, and reusable components for seamless data management.`,
      imageUrl: p5,
      Url: 'https://dashboard367.netlify.app/'
    },
    {
      id:5,
      title: 'Single Page Application',
      description: `Tech Orbit – A sleek single-page ReactJS application designed for speed and smooth navigation. Built with reusable components and modern UI for a seamless user experience.`,
      imageUrl: p6,
      Url: 'https://tech-orbit.netlify.app/'
    },
    {
      id:6,
      title: 'Livin Leathers – Premium Leather Jackets E-Commerce Website (WordPress CMS)',
      description: `I developed Livin Leathers, a high-performance e-commerce website built on WordPress CMS with a fully customized, responsive design. The site showcases premium leather jackets and apparel with an elegant layout, fast loading speed, and smooth user experience.`,
      imageUrl: p4,
      Url: 'https://livinleathers.com/'
    },
    {
      id:7,
      title: 'Assignment Mentor UK',
      description: `A professional academic writing service delivering high-quality, customized, and plagiarism-free assignments. Built for reliability, clarity, and student success.`,
      imageUrl: p7,
      Url: 'https://assignmentmentor.co.uk/'
    },
    {
      id:8,
      title: 'Shinra Solution',
      description: `A modern business website built on WordPress with a focus on professional design, smooth navigation, and responsive layouts. The site highlights services, projects, and company insights while ensuring a user-friendly experience across all devices`,
      imageUrl: p8,
      Url: 'https://shinrasolution.com/'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="row">
          <div className='text-center pb-5'>
            <div className="section_center"><h6 className="hr-lines1">Portfolio</h6></div>
            <h1 className="main_font">Recent Projects</h1>
          </div>
          {visibleProjects.map((project) => (
            <div key={project.id} className='col-lg-6 mb-5'>
              <ProjectCard {...project} />
            </div>
          ))}
          {projects.length > 4 && (
            <div className="col-lg-12 text-center">
              <button
                className="btn btn2"
                onClick={() => setShowAll(prev => !prev)}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;