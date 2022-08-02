import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         options: this.props.options
    //     }
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }

    // when renders
    componentDidMount() {
        // trycatch because JSON.parse() will throw an error if json is not in valid format for any reason
        try {
            const json = localStorage.options;
            const options = JSON.parse(json);
            if (options) { this.setState(() => ({ options })); }
        } catch (error) {
            // do nothing
        }
    }

    // when state or props change
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });
    }

    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => option !== optionToDelete)
            };
        });
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleAddOption = (option) => {
        // form validation
        if (!option) {
            return "enter a valid option";
        } else if (this.state.options.indexOf(option) > -1) {
            return "this option already exists";
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));    // shorthand for returning an object
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
    }

    render() {
        const title = "Indecision";
        const subtitle = "put your life in the hands of blaah";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;