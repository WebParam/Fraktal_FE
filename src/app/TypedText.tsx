import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  let typedInstance: Typed | undefined;

  useEffect(() => {
    const options = {
      strings: ["Developer.", "Gig."],
      typeSpeed: 90,
      loop: true,
      backSpeed: 90,
      backDelay: 2500,
    };

    const typedElement = document.querySelector('.js-typedjs');
    if (typedElement) {
      typedInstance = new Typed(typedElement, options);
    }

    // Cleanup on component unmount
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return <span className="js-typedjs">Developer</span>;
};

export default TypedText;
