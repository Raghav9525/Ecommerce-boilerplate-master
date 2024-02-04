import React from 'react';
import data from '../db.json';
import { useParams } from 'react-router-dom';
import { FaIndianRupeeSign } from 'react-icons/fa6';

function Product() {
    const { id } = useParams(); // Correctly retrieve the product ID
    const my_product = data.products.find(product => product.id === parseInt(id));

    const addToCart = (productId) => {
        const cart = JSON.parse(localStorage.getItem('/cart')) || [];
        const productToAdd = data.products.find(product => product.id === productId);

        // Check if product already exists in cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            // Increment quantity if product exists
            existingProduct.quantity += 1;
        } else {
            // Add new product with quantity 1
            productToAdd.quantity = 1;
            cart.push(productToAdd);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    };

    return (
        <div className="container view mt-2 mb-2">
            <div className="row mt-4">
                {my_product ? (
                    <>
                        <div className="col-sm-6">
                            <img className="img-fluid" src={my_product.image} alt={my_product.title} style={{ height: "400px" }} />
                        </div>
                        <div className="col-sm-6">
                            <div className="card mt-4 p-2" style={{ border: "none" }}>
                                <h4 className=''>{my_product.title}</h4>
                                <h4 className="text-primary ps-2 pt-2 pb-4">
                                    <FaIndianRupeeSign />{my_product.amount}
                                </h4>
                                <div className="mt-4 pt-4 pb-2" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <button className="btn btn-primary me-2" onClick={() => addToCart(my_product.id)}>Add to basket</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Product not found.</p>
                )}
            </div>
        </div>
    );
}

export default Product;
