import React, { Component } from 'react'

import ProductCard from './ProductCard';

import '../../css/LandingPage/LandingPage.css';

export default class LandingPage extends Component {
    constructor(){
        super();
        
        this.setState = {
            filters:{
                lowestPrice: 0,
                highestPrice:5000,
                quality: 'New', /*New, Used, Scrap*/
            },
            displayOptions:{
                skip:0,
                limit:25,
            }
        }
    }
    render() {
        return (
            <div className="landingPageBody">
                <div className="landingPageLeft">Left Filter</div>
                <div className="landingPageRight">
                    <ProductCard/>
                </div>
            </div>
        )
    }
}
