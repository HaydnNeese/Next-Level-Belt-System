import React from 'react';

const PassFailButtons = () => {
    return (
        <div class="buttons">
            <button type="button" class="btn btn-danger fail"><i class="fas fa-thumbs-down"></i></button>
            <button type="button" class="btn btn-success pass"><i class="fas fa-thumbs-up"></i></button>
        </div>
    )
}

export default PassFailButtons;