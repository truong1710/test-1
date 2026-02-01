import { useEffect, useState } from "react";
import anuong from "../assets/an_uong.jpg";
import chua from "../assets/chua_1_cot.jpg";
import congvien from "../assets/cong_vien_thong_nhat.jpg";
import trungtamgiaitri from "../assets/trung_tam_thuong_mai.jpg";

const images = [anuong, chua, congvien, trungtamgiaitri];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[index]}
        alt="slider"
        width="400"
      />
    </div>
  );
}

export default Slider;
