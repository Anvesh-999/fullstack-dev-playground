import "./Product.css";
import Price from "./Price.jsx";

function Product({title}) {
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["10,999","9,999","1,299","499"];
    return (
        <div className="product">
           <h4>{title}</h4>
           <p>Description</p>
           <Price />
        </div>
    );
}   
export default Product;