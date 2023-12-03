
import './TechSkills.css'

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiAmazonaws,
} from 'react-icons/si';
import { useState } from 'react';


const TechSkills = () => {
    const [selectedTech, setSelectedTech] = useState(null);
    

  const handleTechClick = (techName) => {
    setSelectedTech(techName);
  };

  const handleCloseModal = () => {
    setSelectedTech(null);
  };
  return (
    <div>
    <ul className="container">
    <h1 className="title"> Professional <b className="purple"> Skills</b> </h1>
      <li className="techIcon" onClick={() => handleTechClick('JavaScript')}>
        <DiJavascript1 />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('TypeScript')}>
        <SiTypescript />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('Node-js')}>
        <DiNodejs />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('React')}>
        <DiReact />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('Mongodb')}>
        <DiMongodb />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('Sass')}>
        <DiSass />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('Amazon-AWS')}>
        <SiAmazonaws />
      </li>
      <li className="techIcon" onClick={() => handleTechClick('Git')}>
        <DiGit />
      </li>
    </ul>
    {selectedTech && (
        <div className="modal">
          <div className="modalContent">
            <h2>{`Details about ${selectedTech}`}</h2>
            {selectedTech  && (
              <p> What I know about {selectedTech} ...</p>
            )}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>

  );
};

export default TechSkills;