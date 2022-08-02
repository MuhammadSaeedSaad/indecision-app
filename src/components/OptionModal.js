import React from "react";
import Model from 'react-modal';

const OptionModal = (props) => (
    <Model
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLable = "Selected option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption} className="button">Ok</button>
    </Model>
);

export default OptionModal;