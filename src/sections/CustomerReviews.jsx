import React, { useState } from "react";

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-6 text-left font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="px-6 pb-4 text-gray-300">{children}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="text-center text-2xl font-bold text-black mb-6">
        SIKÇA SORULAN SORULAR
      </div>
      <div className="max-w-full mx-auto bg-blue-800 rounded-md shadow-md ">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </>
  );
};

export default Accordion;
