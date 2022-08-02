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



// class Action extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//         );
//     }
// }

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



// class Option extends React.Component {
//     render() {
//         return (
//             <p>{this.props.optionText}</p>
//         );
//     }
// }