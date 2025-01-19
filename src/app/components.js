import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import globals from "./page.module.css"

const Components = () => {
    const images = [
        "https://i.pinimg.com/236x/17/3a/d8/173ad826e0ecb50ef876736014528b8f.jpg",
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
        "https://ideacdn.net/idea/kg/33/myassets/blogs/blog-41.jpg?revision=1724850629"
      ];
      const [img, setImg] = useState(0);
    
      function handleClickNext() {
        setImg((prev) => (prev + 1) % images.length);
      }
    
      function handleClickPrev() {
        setImg((prev) => (prev - 1 + images.length) % images.length);
      }
    
      return (
        <div className="box">
            <h1>Project 1: Carousel</h1>
          <button className="prev" onClick={handleClickPrev}><GrPrevious /></button>
          <img  className=" img"src={images[img]} alt="carousel" />
          <button className="next" onClick={handleClickNext}><GrNext /></button>
        </div>
      );
  
}
export default Components