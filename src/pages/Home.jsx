    import Hero from '../sections/Hero';
    import AboutSec from '../sections/AboutSection';
    import Services from '../sections/Services';
    import CounterSection from '../sections/CounterSection';
    import Skills from '../sections/Skills';
    import ProjectsSection from '../sections/ProjectsSection';
    import WorkedInfo from '../sections/WorkedInfo';
    import TestimonialCarousel from '../sections/TestimonialCarousel';
    import Contact from '../sections/Contact';
    import Footer from '../sections/Footer';
    
    

    export default function Home(){


    return(

    <>
      <Hero />
      <div id="about">
        <AboutSec />
      </div>
      <div id="services">
        <Services />
      </div>
      <CounterSection />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <WorkedInfo />
      <TestimonialCarousel />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
    // <>
    // <Hero/>
    // <AboutSec/>
    // <Services/>
    // <CounterSection/>
    // <Skills/>
    // <ProjectsSection/>
    // <WorkedInfo/>
    // <TestimonialCarousel/>
    // <Contact/>
    // <Footer/>
    // </>
    
)




    }