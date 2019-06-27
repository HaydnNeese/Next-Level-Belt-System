import React from 'react';
import PassFailButtons from '../pass_fail_buttons/index';
import ExerciseVideo from '../video/index';

const cardTitleStyle = {
    fontFamily: "'Merriweather Sans', sans-serif"
};

const cardTextStyle = {
    fontFamily: "'Montserrat', sans-serif"
};

//set up props for displaying the correct exercise on the card
const ExerciseCard = (props) => {
    return (
        <div class="card mb-3">
            <ExerciseVideo 
            src={props.src}
            />
            <div class="card-body">
                <h5 class="card-title" style={cardTitleStyle}>{props.exercise}</h5>
                <p class="card-text" style={cardTextStyle}>{props.tipOne}</p>
                <p class="card-text" style={cardTextStyle}>{props.tipTwo}</p>
                <p class="card-text" style={cardTextStyle}>{props.tipThree}</p>
                <PassFailButtons />
            </div>
        </div>
    )
}

export default ExerciseCard;