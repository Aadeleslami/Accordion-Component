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
  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          onOpen={handleOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={4}
        title="Accordion Another"
        onOpen={handleOpen}
        open={open}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore
          harum eveniet veritatis error molestiae debitis dolorem nam!
          Consectetur eaque soluta magnam alias dolore aperiam quo, fuga
          mollitia a deserunt.
        </p>
        <ul>
          <li>adel</li>
          <li>front-end</li>
        </ul>
        <a href="https://github.com/Aadeleslami">Git</a>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, setOpen, open, onOpen, children }) {
  const isOpen = id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => onOpen(id)}>
        <div>{title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          // style={{
          //   width: "1rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div> } */}
    </div>
  );
}
