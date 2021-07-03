import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCardItem({ keyp, product, colSize, link, btnName }) {
  return (
    <div key={keyp} className={`col-lg-${colSize}`}>
      <div className="card mb-5" style={{ height: "320px" }}>
        <div
          style={{
            height: "145px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "80px", marginTop: "20px" }}
            src="https://cdn.tgdd.vn/Products/Images/42/220438/oppo-reno5-den-1-org.jpg"
          />
        </div>
        <div className="card-body text-center">
          <h6>{product.productName}</h6>
          <h6>
            <span>{product.price}đ</span>
          </h6>
        </div>
        <div className="text-center align-items-end mb-3">
          <Link to={`${link}/${product.id}`}>
            <span className="btn btn-dark">{btnName}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCardItem.propTypes = {
  keyp: PropTypes.string,
  product: PropTypes.object,
  colSize: PropTypes.number,
  link: PropTypes.string,
  btnName: PropTypes.string,
};

export default ProductCardItem;
