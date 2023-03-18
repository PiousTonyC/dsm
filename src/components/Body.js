import React from 'react'
import {useState} from 'react';



function Body() {

const [isChecked, setIsChecked] = useState(false);
  
const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
  console.log(numericValue)
};
      
var numericValue = isChecked ? 1 : 0;



const [isChecked1, setIsChecked1] = useState(false);
  
const handleCheckboxChange1 = () => {
  setIsChecked1(!isChecked1);
  
  console.log(numericValue1)
};
        
  var numericValue1 = isChecked1 ? 1 : 0;

  const [isChecked2, setIsChecked2] = useState(false);
  
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

  const onSubmit = () => {
    console.log(numericValue,numericValue1,numericValue2)
    console.log(myjson)
  }

  return (
    <div>
      <form>
        <h4>Select Symptoms:</h4>
        <label>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            />
            Symptom1
        </label>
        <label>
            <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
            />
            Symptom2
        </label>
        <label>
            <input
            type="checkbox"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
            />
            Symptom3
        </label>
        <input type="button" value="Submit" onClick={onSubmit}/>


        {Object.keys(prediction_val).map((key, i) => (
        <p key={i}>
          <span>{key}</span>
          <span>{prediction_val[key]}</span>
        </p>
      ))}
      </form>
    </div>
  )
}

export default Body
