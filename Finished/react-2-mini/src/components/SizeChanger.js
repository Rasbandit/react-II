import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" onChange={(e) => {props.update('fontSize', e.target.value)}} disabled={ props.allowEdit === "false" }>
      <option value="12"> 12 </option>
      <option value="20"> 20 </option>
      <option value="30"> 30 </option>
    </select>
  )
}