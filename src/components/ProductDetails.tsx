import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { clothes, electronics, gold } from "../data";
import "../assets/main.css"
function ProductDetails() {
  let { slug } = useParams();

  type dataProps = {
    title: string;
    description: string;
    price: string;
    image: string;
    slug: string;
  };

  const [data, setData] = useState<dataProps | undefined>();
  useEffect(() => {
    const CombinedArrays = clothes.concat(electronics, gold);
    const product = CombinedArrays.find((i) => i.slug == slug);
    setData(product);

    // console.log("state",data);
  }, []);

  return (
    <main className="container">
 
  {/* {{  Left Column / Headphones Image */}
  <div className="left-column">
    <img data-image="red" className="active" src="https://img.freepik.com/photos-gratuite/tshirt-noir-uni-fond-blanc_125540-2496.jpg?w=360" alt=""/>
  </div>
 
 
  {/* {{  Right Column */}
  <div className="right-column">
    {/* {{  Product Description */}
    <div className="product-description">
      <span>Headphones</span>
      <h1>{data?.title}</h1>
      <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
    </div>
 
    {/* {{  Product Configuration */}
    <div className="product-configuration">
 
      {/* {{  Cable Configuration */}
      <div className="cable-config">
        <span>Cable configuration</span>
 
        <div className="cable-choose">
          <button>Straight</button>
          <button>Coiled</button>
          <button>Long-coiled</button>
        </div>
 
        <a href="#">How to configurate your headphones</a>
      </div>
    </div>
 
    {/* {{  Product Pricing */}
    <div className="product-price">
      <span>{data?.price} DH</span>
      <a href="#" className="cart-btn">Add to cart</a>
    </div>
  </div>
</main>
  );
}

export default ProductDetails;
