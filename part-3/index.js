const App = () => {
    return (
        <div>
            <Person name="Jenny" age={22} hobbies={["crafts", "reading"]} />
            <Person name="Joe" age={12} hobbies={["soccer", "hockey"]} />
            <Person name="Sam" age={53} hobbies={["gardening", "writing"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))