import React from 'react';
import Style from '../belt_grid/style.css';

const BeltGrid = () => {
    return (
        <container>
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                White Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
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
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Purple Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Blue Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSix">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Green Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSeven">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Brown Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingEight">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Red Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingNine">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Black Belt
                        </button>
                            <div class="buttons">
                                <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
                                <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class='row'>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                                <div class='col-md-4'>
                                    <p>Exercise</p>
                                    <img src='https://via.placeholder.com/150' alt='placeholder'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </container>
    )
}

export default BeltGrid;