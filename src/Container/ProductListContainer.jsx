import React, { useEffect, useState } from "react";
import "./ProductListContainer.css";
import axios from "axios";
import Loading from "../Components/Loading";
import { API_ENDPOINTS } from "../shared/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cart/cartActions";
import { addToWishList } from "../Store/wishlist/wishListAction";

function ProductListContainer(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const dispatch = useDispatch();

  const addToCartFromCartActions = (item) => {
    dispatch(addToCart(item));
  };

  const addToWishlistFromActions = (item) => {
    dispatch(addToWishList(item));
  };

  const fetchApi = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `${API_ENDPOINTS.productApi}?offset=${
          (Number(page) - 1) * limit
        }&limit=${limit}`
      );
      setData((prevData) => [...prevData, ...res.data]);
      setHasMore(res.data.length === limit);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="product-row">
        <div className="card product-card">
          {loading ? (
            <Loading />
          ) : (
            data.map((values, index) => {
              return (
                <div
                  className="card-container"
                  key={`${values.title} ${index}`}
                >
                  {/* <h4>{values.id}</h4> */}
                  <img
                    src={values?.images[0] || "./images/pic.jpg"}
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
                          onClick={() => addToWishlistFromActions(values)}
                        >
                          Add to Wishlist
                        </button>
                        <button
                          type="button"
                          onClick={() => addToCartFromCartActions(values)}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {hasMore && (
        <button onClick={loadMore} className="load-more-btn">
          Load more
        </button>
      )}
    </>
  );
}

export default ProductListContainer;
