import { useState, useEffect } from 'react';
import mockup from '../assets/images/iPhone 12 Mini Empty.png';
import ex1 from '../assets/images/ex1.png';
import ex2 from '../assets/images/ex2.png';

const Phone = () => {
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  const onScrollHandler = () => {
    setScrollHeight((prev) => window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <div className="section-wrapper phone">
      <div className="section-container">
        <img src={mockup} width="auto" className="external-image" />
        <img
          src={ex1}
          width="auto"
          className="internal-image ex1"
          style={{
            opacity: `${1 - scrollHeight / window.innerHeight}`,
          }}
        />
        <img
          src={ex2}
          width="auto"
          className="internal-image ex2"
          style={{
            opacity: `${scrollHeight / window.innerHeight}`,
          }}
        />
      </div>
    </div>
  );
};

export default Phone;
