
// import React, { useState } from 'react';
// import './TestimonialCarousel.css';

// // Sample testimonial data
// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Marketing Director",
//     text: "This product has completely transformed our team's workflow. The interface is intuitive and the support team is incredibly responsive.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/1.jpg"
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Software Engineer",
//     text: "I've tried many similar tools, but this one stands out with its powerful features and seamless integration capabilities.",
//     rating: 4,
//     image: "https://randomuser.me/api/portraits/men/2.jpg"
//   },
//   {
//     id: 3,
//     name: "Emma Wilson",
//     role: "Product Manager",
//     text: "An essential tool for our product team. It helped us streamline our processes and improve collaboration across departments.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/3.jpg"
//   }
// ];

// // Star Rating Component
// const StarRating = ({ rating }) => {
//   const stars = Array.from({ length: 5 }, (_, index) => (
//     <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
//   ));
  
//   return <div className="star-rating">{stars}</div>;
// };

// // Testimonial Carousel Component
// const TestimonialCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };
  
//   const prevTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };
  
//   const activeTestimonial = testimonials[activeIndex];
  
//   return (
//     <div className="testimonial-section">
//       <div className="testimonial-header">
//         <div className="section-title">— Testimonial</div>
//         <h2 className="section-heading">Appreciations From My Clients</h2>
//       </div>
      
//       <div className="testimonial-content">
//         <StarRating rating={activeTestimonial.rating} />
//         <p className="testimonial-text">{activeTestimonial.text}</p>
//       </div>
      
//       <div className="testimonial-carousel">
//         <button className="carousel-btn prev" onClick={prevTestimonial}>❮</button>
        
//         <div className="avatar-container">
//           {testimonials.map((testimonial, index) => {
//             // Calculate position classes
//             let positionClass = "avatar";
//             if (index === activeIndex) positionClass += " active";
            
//             return (
//               <div 
//                 key={testimonial.id} 
//                 className={positionClass}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <img src={testimonial.image} alt={testimonial.name} />
//               </div>
//             );
//           })}
//         </div>
        
//         <button className="carousel-btn next" onClick={nextTestimonial}>❯</button>
//       </div>
      
//       <div className="testimonial-author">
//         <h3 className="author-name">{activeTestimonial.name}</h3>
//         <p className="author-role">{activeTestimonial.role}</p>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;


import React, { useState } from 'react';
import './TestimonialCarousel.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Doskd Cuban",
    role: "Business man",
    text: "I'm a very particular person who likes to order a site done. I just told him an idea without any clear plan he did his research and made the website with quite a lot of details. Also, he always responded to me quickly.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    text: "The attention to detail is impressive. The website exceeded our expectations and has significantly improved our online presence.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    text: "Fast turnaround and excellent communication throughout the project. Would definitely work with again.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "E-commerce Manager",
    text: "Our sales have increased by 40% since launching the new website. The UX design is intuitive and customer-friendly.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Restaurant Owner",
    text: "The online ordering system works flawlessly. The website has helped us reach new customers in our area.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
  ));

  return <div className="star-rating">{stars}</div>;
};

// Testimonial carousel component
const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const rotationIntervalRef = React.useRef(null);

  // Auto rotation timing (in milliseconds)
  const rotationDelay = 3000;

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Start auto rotation
  const startAutoRotation = () => {
    if (rotationIntervalRef.current === null) {
      rotationIntervalRef.current = setInterval(nextTestimonial, rotationDelay);
    }
  };

  // Stop auto rotation
  const stopAutoRotation = () => {
    if (rotationIntervalRef.current !== null) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoRotation();
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoRotation();
  };

  // Start auto-rotation on component mount and clean up on unmount
  React.useEffect(() => {
    startAutoRotation();

    return () => {
      stopAutoRotation();
    };
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className='testimonial_section'>
    <div 
      className="testimonial-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="testimonial-header">
        <div className="section-title">— Testimonial</div>
        <h2 className="section-heading">Appreciations From My Clients</h2>
      </div>

      <div className="testimonial-content">
        <StarRating rating={activeTestimonial.rating} />
        <p className="testimonial-text">{activeTestimonial.text}</p>
      </div>

      <div className="testimonial-carousel">
        <button className="carousel-btn prev" onClick={prevTestimonial}>❮</button>

        <div className="avatar-container">
          {testimonials.map((testimonial, index) => {
            // Calculate position classes
            let positionClass = "avatar";
            if (index === activeIndex) positionClass += " active";

            return (
              <div 
                key={testimonial.id} 
                className={positionClass}
                onClick={() => setActiveIndex(index)}
              >
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
            );
          })}
        </div>

        <button className="carousel-btn next" onClick={nextTestimonial}>❯</button>
      </div>

      <div className="testimonial-author">
        <h3 className="author-name">{activeTestimonial.name}</h3>
        <p className="author-role">{activeTestimonial.role}</p>
      </div>
    </div>
    </section>
  );
};

export default TestimonialCarousel;