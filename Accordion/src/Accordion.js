import { useState } from "react";

const Accordion = ({ title, info, id }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div key={id} className="accordion">
        <div className="accordion-title">
          <h3>{title}</h3>
          <button onClick={toggle} className="accordion-icon">
            {show ? "-" : "+"}
          </button>
        </div>
        {show && <p className="accordion-info">{info}</p>}
      </div>
    </>
  );
};

export default Accordion;
