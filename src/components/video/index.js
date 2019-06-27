import React from 'react';

//props are for dynamically putting in the correct video that correlates with the exercise being displayed
const ExerciseVideo = (props) => {
    return(
        <iframe height="250px" src={props.src}>
        </iframe>
    )
}

export default ExerciseVideo;

