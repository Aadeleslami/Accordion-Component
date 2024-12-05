import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore nemo ipsum in? Aspernatur ipsam quibusdam similique itaque voluptatibus voluptate asperiores, non aperiam! Eaque maiores rem beatae mollitia inventore ",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore nemo ipsum in? Aspernatur ipsam quibusdam similique itaque voluptatibus voluptate asperiores, non aperiam! Eaque maiores rem beatae mollitia inventore ",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore nemo ipsum in? Aspernatur ipsam quibusdam similique itaque voluptatibus voluptate asperiores, non aperiam! Eaque maiores rem beatae mollitia inventore ",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) =>{
    setOpen(id)
  }
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} onOpen={handleOpen} open={open} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item , setOpen, open, onOpen}) {
const isOpen = item.id === open
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={()=>onOpen(item.id)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon
        className="accordion-item__chevron"
          // style={{
          //   width: "1rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div> } */}
    </div>
  );
}
