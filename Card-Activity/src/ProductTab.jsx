import Product from "./product.jsx";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        justifyContent:"center",
        marginTop:"30px"
    };
    return(
       <div style={styles}>
        <Product title="logitech Mx master" idx={0}/>
        <Product title="Apple Pencil(2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 23" idx={3}/>
       </div>
    );
}

export default ProductTab;