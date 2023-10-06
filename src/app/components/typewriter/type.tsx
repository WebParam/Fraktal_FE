"use client"
import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Type() {
  useEffect(() => {
    const options = {
      strings: ["startup.", "future.", "success."],
      typeSpeed: 90,
      loop: true,
      backSpeed: 90,
      backDelay: 2500,
    };

    const typedElement = document.querySelector('.js-typedjs');
    if (typedElement) {
      new Typed(typedElement, options);
    }
  }, []);

  return (
    <span className="js-typedjs" style={{color: '#FD2DC3', caretColor: '#FD2DC3'}}>future.</span>
  );
}

export default Type;