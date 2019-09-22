import React, { Component } from 'react';
import HomePageSlider from "../components/Home/HomePageSlider";
import Content from "../components/Home/Content"
// function Home()
// {
// return(
//     <div>
//  <div className="SliderDiv"><HomePageSlider/></div>
// <Content  updateForm={this.props.updateForm}/>
// </div>
// )
// }
class Home extends React.Component{
    
    render(){
        return(
            <div>
         <div className="SliderDiv"><HomePageSlider/></div>
        <Content  updateForm={this.props.updateForm}/>
       
        </div>
        ) 
    }
}
export default Home;