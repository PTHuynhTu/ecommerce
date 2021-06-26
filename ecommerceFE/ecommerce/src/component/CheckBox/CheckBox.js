import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Checkbox({ handleFilters, list }) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    list &&
    list.map((value, index) => (
      <li key={index}>
        <div className="checkbox ml-3">
          <label>
            <input
              onChange={() => handleToggle(value.name)}
              type="checkbox"
              checked={checked.indexOf(value.name) !== -1}
            />
            <span className="cr">
              {/* <i className="cr-icon fas fa-check"></i> */}
              <FontAwesomeIcon className="cr-icon" icon={faCheck} />
            </span>
            {value.name}
          </label>
        </div>
      </li>
    ));

  return <ul className="list-unstyled">{renderCheckboxLists()}</ul>;
}

Checkbox.propTypes = {
  handleFilters: PropTypes.func,
  list: PropTypes.array,
};

export default Checkbox;
