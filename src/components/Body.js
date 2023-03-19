// import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react';
import "../styles/glassToggle.css"
// import NewBody from './NewBody';
import Search from './Search';


function Body() {
  
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  
const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
  console.log(numericValue)
};
      
var numericValue = isChecked ? 1 : 0;


const [isActive,setisActive]=useState(true);
  
const handleCheckboxChange1 = () => {
  setIsChecked1(!isChecked1);
  
  console.log(numericValue1)
};
        
  var numericValue1 = isChecked1 ? 1 : 0;

  
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    
    console.log(numericValue2)
  };
          
    var numericValue2 = isChecked2 ? 1 : 0;




  var prediction_val = {"op1":"test_name1","op2":"test_name2"}



  var obj = {"s1":numericValue,
                "s2":numericValue1,
                "s3":numericValue2
            }

    var myjson = JSON.stringify(obj)

    var temp = '0'



  return (
    <div>
      <form class="container">
        {/* <NewBody/> */}
        <Search/>
      </form>
    </div>
  )
}

export default Body
