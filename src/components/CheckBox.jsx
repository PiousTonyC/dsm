import React, { useState } from 'react'
import "../styles/toggle.css"

const CheckBox = ({label,disText}) => {
    //check if checked

    const [isChecked,setIsChecked] =useState(false)

  return (
    <div>
        <label>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={()=>setIsChecked(!isChecked)}/>
            {label}
        </label>
        <p class={isChecked?"disclaimer-text":"hidden"}>{disText}</p>
    </div>
  )
}

export default CheckBox