import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae cum facere minus exercitationem quia cumque quis? Sequi pariatur sint vel magnam consequatur autem, minus quibusdam doloribus dolorum. Quaerat, magni ",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae cum facere minus exercitationem quia cumque quis? Sequi pariatur sint vel magnam consequatur autem, minus quibusdam doloribus dolorum. Quaerat, magni ",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae cum facere minus exercitationem quia cumque quis? Sequi pariatur sint vel magnam consequatur autem, minus quibusdam doloribus dolorum. Quaerat, magni ",
  },
];
function Accordion() {
  return (
    <div className="accordion">
     {data.map(item => <AccordionItem key={item.id} item ={item}/>)}
    </div>
  );
}

export default Accordion;

function AccordionItem({item}){
  const [isOpen , setIsopen] = useState(false);
  return(<div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
  <div className="accordion-item__header" onClick={() => setIsopen(prevIsOPen => !prevIsOPen)}>{item.title} </div>
  <div className="accordion-item__content">{item.text} </div>
</div>)
}