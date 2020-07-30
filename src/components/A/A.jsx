import React from "react";

const A = ({ children, to }) => {
  return <a href={to}>{children}</a>;
};

export default A;
