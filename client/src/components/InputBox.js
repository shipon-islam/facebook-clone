import React from "react";

export default function InputBox({
  Type,
  Name,
  Value,
  onHandleChange,
  Placeholder,
  Icons,
  validate,
}) {
  return (
    <>
      <div className="form-control">
        <input
          className="input-box"
          type={Type}
          name={Name}
          onChange={onHandleChange}
          value={Value}
          placeholder={Placeholder}
          {...validate}
        />
        <small className="form-icons">{Icons}</small>
      </div>
    </>
  );
}
