import React from 'react';
import './workcardstyles.css';
import Workcard from './Workcard';
import Workcarddata from './Workcarddata'; 

const Work=() => {
  return (
    <div className="Work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Workcarddata.map((val, ind) => {
          return (
            <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              
            />
          );
        })}
        
      </div>
    </div>
  );
}

export default Work;
