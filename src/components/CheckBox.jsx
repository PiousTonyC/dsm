import React, { useState } from 'react'
import "../styles/toggle.css"

const CheckBox = ({onCheckboxChange,label,disText}) => {
    //check if checked

    const [isChecked,setIsChecked] =useState(false)
    const handleCheckboxChange = (event) => {
      setIsChecked(!isChecked);
      onCheckboxChange(event);
    };

  return (
    <div>
        <label>
            <input
            type="checkbox"
            id={label}
            onChange={handleCheckboxChange}/>
            {label}
        </label>
        <p class={isChecked?"disclaimer-text":"hidden"}>{disText}</p>
    </div>
  )
}

export default CheckBox