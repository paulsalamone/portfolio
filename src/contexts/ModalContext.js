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
    subtitle1: "subtitle1",
    caption1: "caption1",
    img1: "...",
    subtitle2: "subtitle2",
    caption2: "caption2",
    img2: "...",
    subtitle3: "subtitle3",
    caption3: "caption3",
    img3: ["..."],
  });

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {props.children}
    </ModalContext.Provider>
  );
};
