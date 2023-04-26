const AnotherComponent = () => {
    const handleClick = () => {
        console.log("Clicou no botão");
    };
    return (
        <div>
            <p>Second Component</p>
            <button onClick={handleClick}>Click</button>
            <hr />
            <button onClick={() => console.log("test")}> Element</button>
        </div>
    );
};

export default AnotherComponent;
