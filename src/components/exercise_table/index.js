import React from 'react';
// need to set this component up with props to be dynamically created based on the exercises listed
const ExerciseTable = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Set</th>
                    <th scope="col">Reps</th>
                    <th scope="col">Tempo</th>
                    <th scope="col">Rest</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>12-15</td>
                    <td>4112</td>
                    <td>30s</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>12-15</td>
                    <td>4112</td>
                    <td>30s</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>12-15</td>
                    <td>4112</td>
                    <td>30s</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExerciseTable;