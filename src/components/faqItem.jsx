import React, { useState } from "react";
import "../App.css";

import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";



const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section>
        <p>{question}</p>
        <img
          className="iconplus"
          src={isOpen ? iconMinus : iconPlus}
          alt="Botón"
          onClick={toggleAccordion}
        />
      </section>
      <div className="article">
        {isOpen && ( 
            <article>{answer}</article>
        )}
      </div>
    </>
  );
}


export default FAQItem;
