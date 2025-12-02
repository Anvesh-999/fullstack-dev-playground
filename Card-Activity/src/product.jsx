import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}) {
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["10,999","9,999","1,299","499"];
    let description=[
        ["8,000 DPI","5 programmable buttons","ergonomic design"], 
        ["intuitive design","designed for ipad pro","palm rejection"], 
        ["designed for ipad pro","palm rejection","tilt support"],
         ["wireless","long battery life","compact design"]
        ];
    return (
        <div className="product">
           <h4>{title}</h4>
           <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
           <p>{description[idx][2]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}
export default Product;