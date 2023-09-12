import React from "react";
import Description from "./Description/index";
import Images from "./Carousel/Images";

function index() {
  return (
    <div style={{ display: "flex" }}>
      <Description />
      <Images />
    </div>
  );
}

export default index;
