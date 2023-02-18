import React from "react";

type TempletLitralType = {
  status: "Loding" | "Sucess" | "Error";
};

const TempletLitral = ({ status }: TempletLitralType) => {
  let message;
  if (status === "Loding") {
    message = "we are loading...";
  } else if (status === "Sucess") {
    message = "Here we have our data";
  } else if (status === "Error") {
    message = "So sorry for error";
  }
  return <div>status : {message}</div>;
};

export default TempletLitral