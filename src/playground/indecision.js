console.log("the app is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        optionsAppRender();
    }
};

const removeAllOptions = () => {
    app.options = [];
    optionsAppRender();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const optionsAppRender = () => {
    // JSX Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options.length > 0) ? <p>here are your options</p> : <p>no options</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add options</button>
            </form>
        </div>
        );
    
    ReactDOM.render(template, appRoot);
};



const appRoot = document.getElementById("app");

optionsAppRender();