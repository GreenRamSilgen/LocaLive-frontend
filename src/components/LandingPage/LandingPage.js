import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'

import ProductCard from "./ProductCard";

import "../../css/LandingPage/LandingPage.css";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});
function valuetext(value) {
  return `${value}°C`;
}
export default class LandingPage extends React.Component{
  constructor() {
    super();

    this.state = {
      filterPriceRange: [0,1000],
      filterQuality: "New" /*New, Used, Scrap*/,

      skip: 0,
      limit: 25,
    };

    this.handleChange = this.handleChange.bind(this);
    this.princeRangeLowInputChange = this.princeRangeLowInputChange.bind(this);
    this.princeRangeHighInputChange = this.princeRangeHighInputChange.bind(this);
  }

  handleChange(event, newValue){
    this.setState({
      filterPriceRange: newValue,
    });
    console.log(this.state.filterPriceRange)
  }

  princeRangeLowInputChange(event){
    if(event.target.value === ''){
      this.setState({
        filterPriceRange: [0,this.state.filterPriceRange[1]]
      });
      return;
    };
    this.setState({
      filterPriceRange: [event.target.value, this.state.filterPriceRange[1]],
    });
  }
  princeRangeHighInputChange(event){
    if(event.target.value === ''){
      this.setState({
        filterPriceRange: [this.state.filterPriceRange[0],1]
      });
      return;
    };
    this.setState({
      filterPriceRange: [this.state.filterPriceRange[0], event.target.value],
    });
    console.log(this.state.filterPriceRange[1]);
  }

  render() {
    return (
      <div className="landingPageBody">
        <div className="landingPageLeft">
          <div className="landingPageLeft__title">Filter Options</div>

          <div className="landingPageLeft__filterOptions">
            {/* PRICE RANGE FILTER */}
            <div className="landingPageLeft__filterOptions--priceRange">
              <Typography id="range-slider" gutterBottom>
                Price Range:
              </Typography>
              <div className="landingPageLeft__filterOptions--priceRangeInputs">
              <input type="text" onChange={this.princeRangeLowInputChange} placeholder={this.state.filterPriceRange[0]} value={this.state.filterPriceRange[0]}/>
    <div className="gap">{`-`}</div>
              <input type="text" onChange={this.princeRangeHighInputChange} placeholder={this.state.filterPriceRange[1]} value={this.state.filterPriceRange[1]}/>
              </div>
              {/* <div>{`$${this.state.filterPriceRange[0]} -- $${this.state.filterPriceRange[1]}`} </div> */}
              <Slider
                value={this.state.filterPriceRange}
                min={0}
                step={1}
                max={1000}
                onChange={this.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
              
            </div>

            {/* QUALITY FILTER*/}
            <div className="landingPageLeft__filterOptions--quality">
              Quality:
              <div className="landingPageLeft__filterOptions--qualityOptions">
                <div className="landingPageLeft__filterOptions--qualityOption">
                  <input
                    id="new"
                    type="radio"
                    name="quality"
                    onChange={() => {
                      console.log("new");
                    }}
                  />
                  <label htmlFor="new"> New</label>
                </div>
                <div className="landingPageLeft__filterOptions--qualityOption">
                  <input
                    id="old"
                    type="radio"
                    name="quality"
                    onChange={() => {
                      console.log("old");
                    }}
                  />
                  <label htmlFor="old"> Old</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landingPageRight">
          <div className="landingPageRight__searchBar">Search Bar HERE</div>
          <div className="landingPageRight__products">
            <ProductCard />
          </div>
          <div className="landingPageRight__loadmore">LOAD MORE</div>
        </div>
      </div>
    );
  }
}
