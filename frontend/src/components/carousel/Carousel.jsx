import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="item">
            <h3>Sempre um novo vídeo</h3>
            <img src="../images/carousel-1.jpeg" alt=""/>
          </div>
          <div className="item">
            <h3 className="titleExtra" style={{textAlign:"right"}}>Estude conosco!</h3>
            <img src="../images/carousel-2.jpeg" alt=""/>
          </div>
          <div className="item">
            <h3>Aproveite!</h3>
            <img src="../images/carousel-5.jpeg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}