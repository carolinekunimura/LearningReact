import {useState} from "react";

    const Hooks = () => {
        let age = 30;
        const [newAge, setNewAge] = useState(40);

    const changeAge = () => {
        age = 35;
        console.log(age);
    };
    const changeNewAge = () => {
        setNewAge(45);
    };
    return (
        <div>
            <p>Age: {age}</p>
            <button onClick={changeAge}>Change Age</button>
            <p>New Age: {newAge}</p>
            <button onClick={changeNewAge}>Change New Age</button>
            <p>New new Age: {newAge}</p>
        </div>
    );
}

export default Hooks;