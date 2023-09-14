import { Carousel } from "react-responsive-carousel";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  "https://growgrows.com/cdn/shop/products/GG-518-SQ-HIRES-2_grande.jpg?v=1676193094.jpg",
  "https://cdn.laredoute.com/products/3/0/1/301fbee9210bce504e0b6c7fef2e9d46.jpg",
  "https://m.media-amazon.com/images/I/91khjVDExAL._AC_UL1500_.jpg",
];
function Images() {
  return (
    <div className="box">
      <Carousel
        useKeyboardArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {images.map((URL, index) => (
          <div className="slide">
            <img
              alt="sample_file"
              src={URL}
              key={index}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Images;