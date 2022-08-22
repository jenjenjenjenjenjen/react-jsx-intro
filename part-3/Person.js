const Person = (props) => {
    let msg;
    if (props.age >= 18) {
        msg = "please go vote!"
    } else {
        msg = "you must be 18."
    }
    let name;
    if (props.name.length > 8) {
        name = props.name.slice(0,6);
    }
    return (
        <div>
            <p>Learn some more about this person.</p>
            <h1>{name}</h1>
            <h3>{msg}</h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}