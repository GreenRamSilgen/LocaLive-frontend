import React, { Component } from 'react'
import '../../css/LandingPage/ProductCard.css'

export default class ProductCard extends Component {
    render() {
        return (
            <div className="productCard">
                <div className="productCard__image">IMG</div>
                
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
        )
    }
}
