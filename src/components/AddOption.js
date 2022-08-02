import React from "react";

class AddOption extends React.Component {
    // new syntax for class properties made possible via the babel-plugin-transform-class-properties & preset "plugins": ["transform-class-properties"]
    // check the video 6.12
    state = {
        error: undefined
    };
    
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //         error: undefined
    //     };
    // }
    
    // new syntax as mentioned above and this solve the this binding issue
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option); // this is not the right way to use a func named like this
        
        this.setState(() => ({ error }));   // using the return opject shorthand in arrow functions

        if (!error) {
            e.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} className="add-option">
                    <input type="text" name="option" className="add-option__input"></input>
                    <button className="button">addOption</button>
                </form>
            </div>
        );
    }
}

export default AddOption;