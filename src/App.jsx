import React from 'react'
import { useState } from "react";
import { FiChevronDown , FiChevronUp } from "react-icons/fi";

const accordionList = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];

const App = () => {
  const [openIndex , setOpenIndex] = useState(null);

  function toggel(index) {
    if(openIndex === index){
      setOpenIndex(null)
    }
    else{
      setOpenIndex(index);
    }
  }

  return !accordionList || (accordionList.length === 0) ? "No item available" : (
    <div className='accordion'>
      {
        accordionList.map((item , index) => {
          return(
            <div className='accordion-item'>
              <button
                onClick={() => toggel(index)}
                className='accordion-title'
              >
                <span>{item.title}</span>
                <span className='right'>{openIndex === index ? <FiChevronUp/> : <FiChevronDown/>} </span>
              </button>
              {
                openIndex === index && (
                  <p className='accordion-content'>
                    {item.content}
                  </p>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default App;