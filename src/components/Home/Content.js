import React, { Component } from 'react';
import homepageimg from "../../images/homepageimg.jpg";
import homepageimg2 from "../../images/homepageimg2.JPG";


function Content() {
    return (
        <div>
            <h1>Why this School</h1>
            <p id="HomeContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div><img src={homepageimg} style={{height:"400px",width:"100%"}} /></div>
            <h2>Silent Features..</h2>
            <p>
                <ul id="HomecContentList">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat diam vitae euismod tincidunt. Donec sit amet congue augue. Suspendisse.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed lacinia lacus. Vestibulum interdum tellus tempus dolor interdum egestas. Fusce sit amet nulla purus. Cras.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat diam vitae euismod tincidunt. Donec sit amet congue augue. Suspendisse.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.</li>
                </ul>
            </p>
            <div><img src={homepageimg2} style={{height:"300px",width:"100%"}} /></div>

        </div>
    )
}
export default Content;