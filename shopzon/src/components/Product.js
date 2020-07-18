import React from 'react';


const Product = (props) => {
    return(
    <ul className="product1">
        <li><img src={props.image} alt={props.al}/></li>
        <li className="product-details">{props.name}</li>
        <li className="product-details">{props.desc}</li>
        <li className="product-details">{props.rating}</li>
        <li className="product-details">{props.price}</li>
    </ul>
    )

}

export default Product
