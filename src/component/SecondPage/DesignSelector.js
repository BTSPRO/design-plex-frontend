import React from "react";
const DesignSelector = ({ designname, type, designTypes }) => {
  return (
    <div className="col-12">
      <label htmlFor="inputState" className="form-label">
        {designname}
      </label>
      <select id="inputState" className="form-select">
        <option selected>{type}</option>
        {designTypes.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DesignSelector;
