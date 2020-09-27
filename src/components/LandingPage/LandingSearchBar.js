import React from 'react';

//CSS
import '../../css/LandingPage/LandingSearchBar.css';
export default class LandingSearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchQuery:null,
        }
    }
    render() {
        return (
            <div className="searchbar__container">
                <form>
                    <input type="text" onChange={(e)=>{
                        this.setState({
                            searchQuery:e.target.value
                        })
                        console.log(this.state.searchQuery)
                    }} value={this.state.searchQuery} placeholder="Search..."></input>
                </form>
                <div ><i className="fas fa-search"></i></div>
            </div>
        )
    }
}
