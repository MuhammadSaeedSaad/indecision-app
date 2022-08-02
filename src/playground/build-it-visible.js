class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                <p>{this.state.visibility && "hidden text"}</p>
            </div>
        );
    }
}

class BuildItVisible extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

ReactDOM.render(<BuildItVisible />, document.getElementById("app"));


// console.log("app running!");

// let visibility = true;

// const buttonToggle = () => {
//     visibility = !(visibility);
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={buttonToggle}>{visibility ? "Hide details" : "Show details"}</button>
//             {visibility && <p>These are some details!</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById("app");


// render();