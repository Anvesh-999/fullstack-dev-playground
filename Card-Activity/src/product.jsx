import "./Product.css";

function Product({title,price}) {
    return (
        <div className="product">
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            {price>10000 && <p>Discount of 5%</p>}
        </div>
    );
}   
export default Product;