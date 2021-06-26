import React, { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductItemFilter } from "../../redux/thunks/product-thunks";
import ScrollButton from "../../component/ScrollButton/ScrollButton";
import Checkbox from "../../component/CheckBox/CheckBox";
import { price } from "../../utilities/constants/FilterPrice";

const Menu = () => {
  const dispatch = useDispatch();
  const productFilterItem = useSelector(
    (state) => state.product.productFilterItem
  );
  const loading = useSelector((state) => state.product.isLoadingProduct);
  const [filterParams, setFilterParams] = useState({
    perfumers: [],
    genders: [],
    prices: [],
  });

  useEffect(() => {
    dispatch(getProductItemFilter());
  }, []);

  const handleFilters = () => {};

  return (
    <div className="container d-flex">
      <ScrollButton />
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <b>Bộ lọc</b>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <h5>RAM</h5>
          <li className="active mb-2" id="homeSubmenu">
            <Checkbox
              list={productFilterItem.RAM}
              handleFilters={(filters) => handleFilters(filters, "RAM")}
            />
          </li>
          <h5>ROM</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.ROM}
              handleFilters={(filters) => handleFilters(filters, "ROM")}
            />
          </li>
          <h5>Thương hiệu</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.Manufacture}
              handleFilters={(filters) => handleFilters(filters, "Manufacture")}
            />
          </li>
          <h5>Màn hình</h5>
          <li className="active mb-2">
            <Checkbox
              list={productFilterItem.Screen}
              handleFilters={(filters) => handleFilters(filters, "Screen")}
            />
          </li>
          <h5>Giá</h5>
          <li className="active mb-2">
            <Checkbox
              list={price}
              handleFilters={(filters) => handleFilters(filters, "prices")}
            />
          </li>
        </ul>
      </nav>
      {/* <Route exact component={() =>
                <MenuCards
                    data={perfumes}
                    loading={loading}
                    itemsPerPage={16}
                    searchByData={[
                        {label: 'Brand', value: 'perfumer'},
                        {label: 'Perfume title', value: 'perfumeTitle'},
                        {label: 'Manufacturer country', value: 'country'}]}
                    sortByPrice={sortByPrice}
                    handleSortByPrice={handleSortByPrice}/>}/> */}
    </div>
  );
};
export default Menu;
