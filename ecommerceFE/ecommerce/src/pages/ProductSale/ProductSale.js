import React, { useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { getProductSale } from "../../redux/thunks/product-thunks";
import { useMemo } from "react";

const ProductSale = memo(() => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  let productIds = [];

  useEffect(() => {
    dispatch(getProductSale());
    console.log(products, "state products");
  }, []);

  useMemo(() => {
    products.forEach((product) => {
      productIds.push(product.id);
    });
    console.log(products, "state products1");
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
                    <div
                      style={{
                        height: "190px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "175px" }}
                        src="https://cdn.tgdd.vn/Products/Images/42/220438/oppo-reno5-den-1-org.jpg"
                      />
                    </div>
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
});
export default ProductSale;
