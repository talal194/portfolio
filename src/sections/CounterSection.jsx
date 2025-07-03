import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';

// First export the CounterItem as named export 
export const CounterItem = ({ value, label, suffix = '+' }) => {

  const counter = {
    color:'#000!importnt',
    fontWeight:'900!important',
  }

const boxes = {
  border: '1px solid rgba(161, 204, 207, .5)',
  padding: '2rem 0',
    borderRadius: '9px',
}


  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className="text-center mb-4" style={boxes}>
      <div className="fs-1 mb-2" style={counter}>
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : <span>0{suffix}</span>}
      </div>
      <div className="text-uppercase" style={{color:'#138086',fontWeight:'700',fontSize:'17px'}}>{label}</div>
    </div>
  );
};

// Then export CounterSection as default export
const CounterSection = () => {
  return (
    <section className="py-5" style={{background:'#e7f2f366'}}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <CounterItem value={4} label="YEARS OF EXPERIENCE"/>
          </div>
          <div className="col-6 col-md-3">
            <CounterItem value={150} label="PROJECTS COMPLETED" />
          </div>
          <div className="col-6 col-md-3">
            <CounterItem value={75} label="SATISFIED CLIENTS " />
          </div>
          <div className="col-6 col-md-3">
            <CounterItem value={22} label="TECHNOLOGIES MASTERED"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection; // Correct default export