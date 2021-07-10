import React from 'react';

const Input = ({id, value, handleChange, label, type, placeholder, mobile, country}) => {

  const handleMobile = () => {
    if (mobile && value.length === 10){
      return value && <span className="checkMob"></span>
    }
  }

  const handlePaste = () => {
    if (mobile) return false
  }

  // const handleNumber = () => {
  //   if (!isNaN(value + 0)){
  //     console.log(value);
  //   }
  // }

  return (
    
    <div className={`parent ${mobile ? 'no' : country ? 'co' : ""}`}>
      <label className="label" htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={handleChange} placeholder={placeholder} onPaste={handlePaste} />
      {value && !mobile && <span className="checkmark"></span>}
      {handleMobile()}
    </div>
  );
};

export default Input;
