import React, { useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import ProductCardItem from "../ProductCardItem/ProductCardItem";

function MenuCards({ data, loading, itemsPerPage }) {
  return (
    <div className="container">
      {/* <div className="container-fluid mt-5 ml-2">
        <SearchForm
          data={data}
          searchByData={searchByData}
          setFilteredData={setFilteredData}
          setSearching={setSearching}
        />
      </div> */}
      <div className="container-fluid mt-3 ml-2">
        <div className="row">
          {/* <div className="col-md-6">
            <PaginationItem
              pagination={pagination}
              prevPage={prevPage}
              changePage={changePage}
              nextPage={nextPage}
            />
          </div> */}
          {/* <div className="col-md-6 d-flex justify-content-end">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Sort by price
                </a>
              </li>
              <li className={sortByPrice ? "page-item active" : "page-item"}>
                <a
                  className={
                    sortByPrice
                      ? "page-link bg-light border-dark text-dark"
                      : "page-link bg-dark border-dark text-light"
                  }
                  onClick={(event) => handleSortByPrice(false, event)}
                >
                  <FontAwesomeIcon className="fa-sm" icon={faArrowDown} />
                </a>
              </li>
              <li className={sortByPrice ? "page-item" : "page-item active"}>
                <a
                  className={
                    sortByPrice
                      ? "page-link bg-dark border-dark text-light"
                      : "page-link bg-light border-dark text-dark"
                  }
                  onClick={(event) => handleSortByPrice(true, event)}
                >
                  <FontAwesomeIcon className="fa-sm" icon={faArrowUp} />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row">
              {data.map((product) => {
                return (
                  <ProductCardItem
                    keyp={product.id}
                    product={product}
                    colSize={3}
                    link={"/product"}
                    btnName={"SHOW MORE"}
                  />
                );
              })}
            </div>
            {/* <PaginationItem
              pagination={pagination}
              prevPage={prevPage}
              changePage={changePage}
              nextPage={nextPage}
            /> */}
          </>
        )}
      </div>
    </div>
  );
}

MenuCards.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  itemsPerPage: PropTypes.number,
};

export default MenuCards;
