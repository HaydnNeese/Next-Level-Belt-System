import React from 'react';

//may need to make a more dynamic menu

const ExerciseMenu = () => {
    return (
        <div class="btn-group-vertical align-items-start" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-dark">Core</button>
            <button type="button" class="btn btn-dark">Glutes</button>
            <button type="button" class="btn btn-dark">Legs (Quads, Hamstrings)</button>
            <button type="button" class="btn btn-dark">Back(Lats)</button>
            <button type="button" class="btn btn-dark">Chest</button>
            <button type="button" class="btn btn-dark">Shoulders</button>
            <button type="button" class="btn btn-dark">Rear Delts</button>
            <button type="button" class="btn btn-dark">Rhomboids</button>
            <button type="button" class="btn btn-dark">Rotator Cuffs</button>
            <button type="button" class="btn btn-dark">Scapular Retraction</button>
            <button type="button" class="btn btn-dark">Balance</button>
            <button type="button" class="btn btn-dark">Biceps</button>
            <button type="button" class="btn btn-dark">Triceps</button>
            <button type="button" class="btn btn-danger">White Belt Test</button>
        </div>
    )
}

export default ExerciseMenu;