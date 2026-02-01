import { useState, useEffect } from "react";
import chua from "../assets/chua_1_cot.jpg";
import an from "../assets/an_uong.jpg";
import congvien from "../assets/cong_vien_thong_nhat.jpg";
import trungtam from "../assets/trung_tam_thuong_mai.jpg";
// import "./Slide.css";

const images = [chua, an, congvien, trungtam];

function Slide() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
 

  return (
    <div className="slider">
      <img src={images[index]} alt="slide" />
      
    </div>
  );
}

export default Slide;
