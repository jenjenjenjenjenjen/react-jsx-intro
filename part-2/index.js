const App = () => {
    return (
        <div>
            <Tweet username="jen" name="Jenny" date="08/12/2021" message="First tweet" />
            <Tweet username="mike" name="Michael" date="08/14/2021" message="Second tweet" />
            <Tweet username="jen" name="Jenny" date="08/25/2021" message="Third tweet" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))