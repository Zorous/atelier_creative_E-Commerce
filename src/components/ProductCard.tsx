import React from 'react'
import {Link} from "react-router-dom";


function ProductCard(
  {title, image, price, slug}:
  {title:string,
  image:string,
  price:string;
  slug : string
})
   {
  return (
    <div className="col-lg-4 col-sm-4">
          <Link to={"product-details/"+slug}>
    <div className="box_main">
       <h4 className="shirt_text">{title}</h4>
       <p className="price_text">Price  <span style={{color:"#262626;"}}> {price} DH</span></p>
       <div className="tshirt_img"><img src={image} /></div>
       <div className="btn_main">
          <div className="buy_bt"><a href="#">Buy Now</a></div>
          <div className="seemore_bt"><a href="#">See More</a></div>
       </div>
    </div>
    </Link>
 </div>
  )
}

export default ProductCard