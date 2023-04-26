import AnotherComponent from "./AnotherComponent";

function FirstComponent()
{
    const name = "Matheus";
    return (
    <div className="firstComponent">
        <p>Primeiro componente</p>
        {2 + 2}
        <p>Nome: {name}</p>
        <AnotherComponent />
    </div>
    );
}
export default FirstComponent;