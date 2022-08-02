let Count = 0;
const addOne = () => {
    Count++;
    renderCountApp();
};

const minusOne = () => {
    Count--;
    renderCountApp();
};

const reset = () => {
    Count = 0;
    renderCountApp();
};

const appRoot = document.getElementById("app");

function renderCountApp() {
    const templateTwo = (
        <div>
            <h1>Count: {Count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
        );

        ReactDOM.render(templateTwo, appRoot);
}

renderCountApp();