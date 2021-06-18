import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { getProductSale } from "../../redux/thunks/product-thunks";
import { useMemo } from "react";

const ProductSale = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.products);

  let productIds = [];

  useEffect(() => {
    dispatch(getProductSale());
  }, []);

  useMemo(() => {
    products.forEach((product) => {
      productIds.push(product.id);
    });
  }, [products]);

  const addCarouselItems = (array, counter) => {
    return (
      <Carousel.Item>
        <div className="card-deck">
          {array.map((product) => {
            for (let i = counter; i < counter + 4; i++) {
              if (product.id === productIds[i]) {
                return (
                  <div className="card" key={product.id}>
                    {/* <div
                      style={{
                        height: "130px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                          style={{ width: "125px" }}
                          src={IMG_URL + `${product.filename}`}
                        />
                    </div> */}
                    <div className="card-body text-center">
                      <h5>{product.productName}</h5>
                      {/* <h6>{perfume.perfumer}</h6> */}
                      {/* <StarRating perfumeRating={perfume.perfumeRating} /> */}
                      <h6>
                        <span>{product.price}đ</span>
                      </h6>
                      <Link to={`/product/${product.id}`}>
                        <span className="btn btn-dark">SHOW MORE</span>
                      </Link>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </Carousel.Item>
    );
  };

  return (
    <div>
      <div className="container text-center my-3">
        <h3>HOT SALE PRODUCT</h3>
      </div>
      <div className="container mt-5" id="indicators">
        <form method="get" action="/">
          <Carousel>
            {addCarouselItems(products, 0)}
            {addCarouselItems(products, 4)}
            {addCarouselItems(products, 8)}
          </Carousel>
        </form>
      </div>
    </div>
  );
};
export default ProductSale;
