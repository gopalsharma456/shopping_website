import React from "react";
import data from "./data.json";
import "./ProductListContainer.css";

function ProductListContainer() {
  return (
    <>
      <div className="product-row">
        <div className="card product-card">
          {data.map((values, index) => {
            return (
              <div className="card-container" key={`${values.title} ${index}`}>
                <img
                  src={values.category.image || values.images}
                  className="card-img-top"
                  alt="Product Name"
                />
                <div className="card-body card-description">
                  <h5 className="card-title">{values.title}</h5>
                  <small className="price-tag">{values.price}$</small>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to Wishlist
                      </button>
                      <button
                        type="button"
                        // onClick={() => handleAddToCart(values)}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductListContainer;
