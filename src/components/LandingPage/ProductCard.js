import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../css/LandingPage/ProductCard.css";

let tempImgArray = [
  "https://i.pinimg.com/originals/1a/b9/4a/1ab94aaa1b86ac5beda12fd7fee0a778.jpg",
  "https://i.pinimg.com/originals/91/95/63/9195635252e175851199544987618b17.jpg",
  "https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/cd/fcd39320-614c-11ea-88d5-ab37e1c7ff72/5e652cc38d58d.preview.jpg?resize=630%2C630",
];

export default class ProductCard extends Component {
  render() {
    return (
      <div className="productCard">
        <div className="productCard__image">
          <Carousel 
          showArrows={true} 
          showThumbs={false} 
          showStatus={false}
          autoPlay={true}
          >
            {tempImgArray.map((imgLink) => {
              return (
                <div>
                  <img src={imgLink} alt={imgLink} />
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className="productCard__info">
          <div className="productCard__info--left">
            <div className="productCard__name">Name</div>
            <div className="productCard__seller">Seller</div>
          </div>
          <div className="productCard__info--right">
            <div className="productCard__price">Price</div>
          </div>
        </div>
      </div>
    );
  }
}
