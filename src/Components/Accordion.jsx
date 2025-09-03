import React, { useState } from "react";

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left text-gray-200 font-medium"
      >
        <span>{question}</span>
        <span className="text-xl text-teal-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-gray-400 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default Accordion;
