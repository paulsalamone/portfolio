import { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalController = (props) => {
  const [modal, setModal] = useState({
    trigger: false,
    name: "Your title",
    categories: ["category 1", "category 2"],
    description:
      "This is the description text. This is the description text. This is the description text. This is the description text. ",
    stack: ["tech1", "tech2"],
    img: "...",
    year: 2022,
  });

  //   name: "Important Startup News",
  //   categories: ["logo", "editorial", "social media"],
  //   description:
  // 	'A short-lived satirical startup news channel created with my associate Christoph "Pitch Doctor" Sollich',
  //   stack: ["Illustrator", "Photoshop"],
  //   img: "/images/isn1.png",
  //   year: 2021,

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {props.children}
    </ModalContext.Provider>
  );
};
