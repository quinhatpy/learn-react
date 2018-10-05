import React from 'react';

const button = (props) => (
    <button
        type={props.type}
        disabled={props.disabled}
        className={props.classes}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;