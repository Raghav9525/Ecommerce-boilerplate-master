import React from 'react';
import '../App.css';
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import data from '../db.json'; 
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  height:"400px",
  // borderRadius: '5%',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 5px',
};

function Home() {
  const navigate = useNavigate();

  const goToProductPage = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <div className="container-fluid ps-4 pe-2 pb-2" style={{backgroundColor: "rgb(229,238,248)"}}>
      <div className="row">

        {data.products.map((product) => (
          <div className="col-sm-3 mt-2" key={product.id} onClick={() => goToProductPage(product.id)} style={{ cursor: 'pointer' }}>
            <div className="card" style={{...cardStyle, height: "360px"}}>
              <img src={product.image} alt={product.title} style={{ height: "200px", width: "100%" }} />
              <div className="card-body">
                <p>T-shirt for formal men</p>
                <p>{product.amount}</p>
                <p className="bg-success text-light" style={{ width: "fit-content" }}>
                  {product.rating}
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <FaHeart />
                  <FaCartShopping />
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Home;
