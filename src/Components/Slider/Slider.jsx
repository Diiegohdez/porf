import React, {Component} from 'react'
import "./slider.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const datoSlid = [
   {
    name: 'photo1', 
    urlImg:"https://i.ibb.co/tMQ9xYN/Sward-Limited.png"
   },

   {
    name: 'photo2', 
    urlImg: "https://i.ibb.co/QnvYGFL/Sward-Limited-ART.gif"
   },

   {
    name: 'photo3', 
    urlImg: "https://i.ibb.co/8N23ks7/Code-Lightning-Sword-ART.gif"
   }
];

class  SliderF extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
  };
  

  return (
    <div className="Slider">
      <Slider {...settings}>
        {datoSlid.map((name) => {
           return(
             <img width="100%"  src={name.urlImg} />
           )
        })}

      </Slider>
     
    </div>
  );
}

}

export default SliderF;