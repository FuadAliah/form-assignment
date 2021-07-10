import React from 'react';

const Select = ({id, value, handleChange, label, data, select}) => {
  return (
    <div className="parent">
      <label className="label" htmlFor={id}>{label}</label>
      <select id={id} onChange={handleChange} value={value}>
        {data &&
          data.map ((item, idx) => (
            <option key={idx} value={item.name}>{item.name}</option>
          ))}
      </select>
      {value && value !== "Select Country" && value !== "Select Gender" &&  select && <span className="checkmark"></span>}
    </div>
  );
};

export default Select;
