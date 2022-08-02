const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "indecision"
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    );
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <p>options component here</p>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => { props.handleDeleteOption(props.optionText)} } > Remove</button>
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <p>{this.props.optionText}</p>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    
    handleAddOption(e) {
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
                {this.state.error && <h3>{this.state.error}</h3>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>addOption</button>
                </form>
            </div>
        );
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: this.props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

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

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });
    }

    handleDeleteOption(optionToDelete) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => option !== optionToDelete)
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
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
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));