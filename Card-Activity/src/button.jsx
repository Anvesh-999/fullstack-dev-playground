
function printHello(){
    console.log("Hello World!");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printHello}>This is an event demo</p>
            </div>
    );
}