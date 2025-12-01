import "./Product.css";

function MsgBox({name,userColor}){
    let styles={color: userColor};
    return (
        <div className="msgbox">
            <h2 style={{color: userColor}}>Hello, {name}</h2>
        </div>
    );
}
export default MsgBox;