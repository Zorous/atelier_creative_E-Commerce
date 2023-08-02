import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { clothes, electronics, gold } from "../data";
import "../assets/productDetails.css";
import Footer from "./Footer";

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
  const [count, setCount] = useState<number>(1);
  const [Name, setName] = useState<string>("");
  const [Number, setNumber] = useState<number | string>();
  const [Address, setAddress] = useState<string>("");

  useEffect(() => {
    const CombinedArrays = clothes.concat(electronics, gold);
    const product = CombinedArrays.find((i) => i.slug == slug);
    setData(product);

    // console.log("state",data);
  }, []);


  return (
    <>
 <div className="container" style={{width:"100vw",margin:"auto",marginTop:"21vh"}}>
      <div className="row mx-auto"
      style={{marginBottom:"15vh"}}>
        <div className="col-md-6 mb-4 mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmsGYfd6z9LmCg9dwGrJlYyIXgrQ27OKyJpOUo07KseUvZ3I96ZmWZolpOHaktdaZtk8&usqp=CAU"
            alt="Produktbild"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-4">
          <h1>{data?.title}</h1>
          <h4>{data?.price} DH</h4>
          <p>{data?.description}</p>
          <div>
                <div className="quantity-controls">
              <button
                className="btn btn-secondary mx-3"
                onClick={() => setCount(Math.max(1, count - 1))}
              >
                -
              </button>
              <span className="quantity">{count}</span>
              <button
                className="btn btn-secondary mx-3"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button className="btn btn-primary buy-now-button"
                    data-toggle="modal"
                    data-target="#exampleModal">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Add your modal content here */}
              <form>

  <div className="form-group">
    <label htmlFor="tele">Nom Complet : </label>
    <input type="email" className="form-control"
    onChange={(e)=>setName(e.target.value)} id="tele" aria-describedby="emailHelp" placeholder="Mohammed" />
  </div>
  <div className="form-group">
    <label htmlFor="tele">Numero de télephone : </label>
    <input type="text"
     onChange={(e)=>setNumber(e.target.value)}
     className="form-control" id="tele" aria-describedby="emailHelp" placeholder="06000000" />
  </div>

  <div className="form-group">
    <label htmlFor="addresse">Addresse : </label>
    <input type="text"
     onChange={(e)=>setAddress(e.target.value)}
      className="form-control" id="addresse" placeholder="hay el amal" />
  </div>
</form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
<Footer />
</>
  );
}

export default ProductDetails;
