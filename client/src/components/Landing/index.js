// import React from "react";

// function index() {
//   return (
//     <div>
//       <h1>testing</h1>
//     </div>
//   );
// }

// export default index;
import React from "react";
import Description from "./Description/index";
import Images from "./Carousel/Images";

function index() {
  return (
    <div classname = "landingback" style={{ display: "flex", margin: "none", backgroundColor: "#f2d1b24d"}}>
      <Description />
      <Images />
    </div>
  );
}

export default index;