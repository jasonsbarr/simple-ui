import React from "react";

export const useState = (init = {}) => {
  const [state, setSt] = React.useState(init);

  const setState = (update = {}) => {
    setSt({ ...state, ...update });
  };

  return { state, setState };
};
