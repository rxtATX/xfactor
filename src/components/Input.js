import React from 'react';

const Input = (props) => {
    return (
        <input
            className="modal-input"
            onChange={event => props.onInputChange(props.placeholder, event.target.value)}
            value={props.display}
            type={props.type}
            placeholder={props.placeholder}>
        </input>
    )
}

export default Input;