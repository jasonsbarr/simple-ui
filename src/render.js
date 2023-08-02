import reactDom from "react-dom";

export const render = (app, elem = document.querySelector("#root")) => {
  reactDom.render(app, elem);
};
