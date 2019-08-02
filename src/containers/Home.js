import React, { Component } from 'react';
import HomePageSlider from "../components/Home/HomePageSlider";
import Content from "../components/Home/Content"
function Home()
{
return(
    <div>
<div className="SliderDiv"><HomePageSlider/></div>
<Content/>
</div>
)
}
export default Home;