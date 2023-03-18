import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react';



function Body() {


const [isChecked, setIsChecked] = useState(false);
  
const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
  console.log(numericValue)
};
      
var numericValue = isChecked ? 1 : 0;



const [isChecked1, setIsChecked1] = useState(false);
const [isActive,setisActive]=useState(true);
  
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

    var temp = '0'

  const onSubmit = async() => {
    const response=await axios.post('/',
      {"0":0,"1":1,"2":0,"3":1,"4":1,"5":1,"6":0,"7":0,"8":0,"9":0,"10":1,"11":0,"12":1,"13":1,"14":0,"15":0,"16":0,"17":1,"18":1,"19":0,"20":0,"21":1,"22":1,"23":0,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":0,"31":0,"32":1,"33":0,"34":1,"35":0,"36":1,"37":0,"38":1,"39":1,"40":1,"41":0,"42":1,"43":1,"44":1,"45":1,"46":0,"47":0,"48":1,"49":0,"50":0,"51":0,"52":1,"53":0,"54":1,"55":1,"56":1,"57":0,"58":1,"59":0,"60":1,"61":1,"62":1,"63":1,"64":0,"65":1,"66":1,"67":1,"68":1,"69":0,"70":0,"71":1,"72":1,"73":1,"74":0,"75":1,"76":0,"77":0,"78":1,"79":0,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":0,"87":1,"88":1,"89":0,"90":0,"91":1,"92":0,"93":0,"94":0,"95":0,"96":1,"97":0,"98":1,"99":1,"100":0,"101":1,"102":0,"103":0,"104":1,"105":0,"106":1,"107":0,"108":0,"109":1,"110":0,"111":0,"112":1,"113":1,"114":1,"115":1,"116":1,"117":0,"118":1,"119":0,"120":1,"121":1,"122":0,"123":1,"124":0,"125":0,"126":1,"127":0,"128":0,"129":0,"130":0,"131":0}
    );
    console.log(response.data)
    temp = response.data
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
      <p>{temp}</p>
    </div>
  )
}

export default Body
