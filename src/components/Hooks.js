import { useState } from "react";

const Hooks = () => {
    let age = 30
    const [newAge, setNewAge] = useState(40);

    function changeAge() {
        age = 31;
        console.log(age);
    }

    const changeNewAge = () => {
        setNewAge(45);
    };
    return (
        <div>
            <p>Idade: {age}</p>
            <button onClick={changeAge}>Change Age</button>
            <p>Idade: {newAge}</p>
            <button onClick={changeA}>Change New Age</button>
        </div>
    )
}

export default Hooks