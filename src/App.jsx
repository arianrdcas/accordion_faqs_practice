
import FAQItem from "./components/faqItem";
import backgroundPattern from "./assets/background-pattern-desktop.svg";
import star from "./assets/icon-star.svg";

import "./App.css";

function App() {
  
  return (
    <>
      <div>
        <img
          className="background-imge"
          src={backgroundPattern}
          alt="background"
        />
        <div className="card">
          <div className="faqs">
            <img className="star-icon" src={star} alt="star-icon" />
            <h1>FAQs</h1>
          </div>
          <FAQItem
            question="What is Frontend Mentor, and how will it help me?"
            answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
          />
          <FAQItem
            question="Is Frontend Mentor free?"
            answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
          />
          <FAQItem
            question="Can I use Frontend Mentor projects in my portfolio?"
            answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          />
          <FAQItem
            question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          />
        </div>
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Arian Rodriguez</a>.
      </div> */}
    </>
  );
}

export default App;
