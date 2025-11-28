import React from 'react';
import ApexCharts from 'react-apexcharts';
//import 'bootstrap/dist/css/bootstrap.min.css';

const SkillChart = ({ skill, percentage, color }) => {
  const options = {
    chart: {
      type: 'radialBar',
      height: 150,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '14px',
            fontWeight: 600,
            color: '#333',
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '24px',
            fontWeight: 700,
            color: color,
            offsetY: 5,
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    },
    colors: [color],
    labels: [skill],
  };

  const series = [percentage];

  return (
    <div className="text-center">
      <ApexCharts 
        options={options} 
        series={series} 
        type="radialBar" 
        height={150} 
      />
    </div>
  );
};

const SkillsCircle = () => {
  const skills = [
    { skill: 'Reactjs', percentage: 80, color: '#138086' },
    { skill: 'JS', percentage: 88, color: '#138086' },
    { skill: 'Bootsrtap', percentage: 90, color: '#138086' },
    { skill: 'Nextjs', percentage: 90, color: '#138086' },
    { skill: 'HTML/CSS', percentage: 95, color: '#138086' },
    { skill: 'Wordpress', percentage: 85, color: '#138086' },
    { skill: 'Jquery', percentage: 90, color: '#138086' },
    { skill: 'Tailwind', percentage: 70, color: '#138086' },
    { skill: 'Shopify', percentage: 70, color: '#138086' },

  ];

  return (
    <div>
      <div className="row">
        {skills.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-3 col-sm-4 col-xs-6">
            <SkillChart 
              skill={item.skill} 
              percentage={item.percentage} 
              color={item.color} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCircle;