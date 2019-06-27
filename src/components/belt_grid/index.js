import React from 'react';
import Style from '../belt_grid/style.css';
import ExerciseMenu from '../menu/index';
import ExerciseCard from '../exercise_card/index';

//set up the state to read what part of the menu is clicked with a toggle function
//may need to place the function in the menu folder

const BeltAccordion = () => {
    return (
        <container>
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                White Belt
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-start">
                            <ExerciseMenu />
                            <div class="mx-auto">
                                <ExerciseCard
                                    exercise='Front Plank Progression'
                                    tipOne='Place hands/elbows at shoulder width'
                                    tipTwo='Tighten core muscles and glutes'
                                    tipThree='Once the athlete has accomplished a plank in each of these positions then click the green thumbs up and continue'
                                    src='https://www.youtube.com/embed/hsitLijVkn0'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Yellow Belt
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-start">
                            <ExerciseMenu />
                            <div class="mx-auto">
                                <ExerciseCard
                                    exercise='Side Plank Progression'
                                    tipOne='Place hands/elbows at shoulder width'
                                    tipTwo='Tighten core muscles and glutes'
                                    tipThree='Once the athlete has accomplished a plank in each of these positions then click the green thumbs up and continue'
                                    src = 'https://www.youtube.com/embed/RtOk5c3T_lA'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Orange Belt
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-start">
                            <ExerciseMenu />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Green Belt
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-start">
                            <ExerciseMenu />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Red Belt
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-start">
                            <ExerciseMenu />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSix">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Black Belt
                            </button>
                        </h2>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-start">
                            <ExerciseMenu />
                        </div>
                    </div>
                </div>
            </div>
        </container>
    )
}

export default BeltAccordion;