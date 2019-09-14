import React, { Component } from 'react';
import EventsPageSlider from "../components/EventsPageSlider";
import SpeechCompetitionSlider from "../components/Events/SpeechSlider/speechCompetitionSlider";
import ScienceSlider from "../components/Events/ScienceSlider/ScienceSlider";
import PaintingSlider from "../components/Events/PaintingSlider/PaintingSlider";


function Events() {
    return (
        <div>
            <div className="SliderDiv"><EventsPageSlider /></div>

            <h2>Students Speech Competition</h2>
            {/* slider */}
            <div className="SliderDiv"><SpeechCompetitionSlider /></div>
            <h2>Students Science Projects</h2>
            {/* slider */}
            <div className="SliderDiv"><ScienceSlider /></div>

            <h2>Students Painting Competition</h2>
            {/* slider */}
            <div className="SliderDiv"><PaintingSlider /></div>


        </div>
    )
}


export default Events;