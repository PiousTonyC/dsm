import React from 'react'
import CheckBox from './CheckBox';

const NewBody = () => {
//functions will be written here
// use state to check if the check box is toggled or not
const disclaimers = [
  {
    label: "Symptom 1",
    disclaimerText: "This is the disclaimer for Symptom 1.",
  },
  {
    label: "Symptom 2",
    disclaimerText: "This is the disclaimer for Symptom 2.",
  },
  {
    label: "Symptom 3",
    disclaimerText: "This is the disclaimer for Symptom 3.",
  },
];



  return (
    <div>
      {disclaimers.map((disclaimer)=>(
        <CheckBox key={disclaimer.label} label={disclaimer.label} disText={disclaimer.disclaimerText}/>
      ))}
    </div>
  )
}

export default NewBody