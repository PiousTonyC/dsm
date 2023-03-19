import React,{useEffect,useState} from "react"
import CheckBox from "./CheckBox";
import "../styles/search.css"
import axios from 'axios';

  


function Search(props) {


    const [selectedValues,setSelectedValues] = useState({'itching':0,'skin_rash':0,'nodal_skin_eruptions':0,
    'continuous_sneezing':0,'shivering':0,'chills':0,'joint_pain':0,'stomach_pain':0,'acidity':0,'ulcers_on_tongue':0,
    'muscle_wasting':0,'vomiting':0,'burning_micturition':0,'spotting_ urination':0,'fatigue':0,'weight_gain':0,'anxiety':0,'cold_hands_and_feets':0,'mood_swings':0,'weight_loss':0,'restlessness':0,'lethargy':0,'patches_in_throat':0,'irregular_sugar_level':0,'cough':0,'high_fever':0,'sunken_eyes':0,'breathlessness':0,'sweating':0,'dehydration':0,'indigestion':0,'headache':0,'yellowish_skin':0,'dark_urine':0,
    'nausea':0,'loss_of_appetite':0,'pain_behind_the_eyes':0,'back_pain':0,'constipation':0,'abdominal_pain':0,'diarrhoea':0,'mild_fever':0,'yellow_urine':0,'yellowing_of_eyes':0,'acute_liver_failure':0,'fluid_overload':0,
    'swelling_of_stomach':0,'swelled_lymph_nodes':0,'malaise':0,'blurred_and_distorted_vision':0,'phlegm':0,'throat_irritation':0,'redness_of_eyes':0,'sinus_pressure':0,'runny_nose':0,'congestion':0,
    'chest_pain':0,'weakness_in_limbs':0,'fast_heart_rate':0,'pain_during_bowel_movements':0,'pain_in_anal_region':0,'bloody_stool':0,'irritation_in_anus':0,'neck_pain':0,'dizziness':0,'cramps':0,
    'bruising':0,'obesity':0,'swollen_legs':0,'swollen_blood_vessels':0,'puffy_face_and_eyes':0,'enlarged_thyroid':0,'brittle_nails':0,'swollen_extremeties':0,'excessive_hunger':0,'extra_marital_contacts':0,'drying_and_tingling_lips':0,
    'slurred_speech':0,'knee_pain':0,'hip_joint_pain':0,'muscle_weakness':0,'stiff_neck':0,'swelling_joints':0,'movement_stiffness':0,'spinning_movements':0,'loss_of_balance':0,'unsteadiness':0,'weakness_of_one_body_side':0,'loss_of_smell':0,'bladder_discomfort':0,
    'foul_smell_of urine':0,'continuous_feel_of_urine':0,'passage_of_gases':0,'internal_itching':0,'toxic_look_(typhos)':0,'depression':0,'irritability':0,'muscle_pain':0,'altered_sensorium':0,'red_spots_over_body':0,'belly_pain':0,
    'abnormal_menstruation':0,'dischromic _patches':0,'watering_from_eyes':0,'increased_appetite':0,'polyuria':0,'family_history':0,'mucoid_sputum':0,'rusty_sputum':0,'lack_of_concentration':0,'visual_disturbances':0,'receiving_blood_transfusion':0,
    'receiving_unsterile_injections':0,'coma':0,'stomach_bleeding':0,'distention_of_abdomen':0,'history_of_alcohol_consumption':0,'fluid_overload.1':0,'blood_in_sputum':0,'prominent_veins_on_calf':0,'palpitations':0,'painful_walking':0,'pus_filled_pimples':0,'blackheads':0,'scurring':0,'skin_peeling':0,'silver_like_dusting':0,'small_dents_in_nails':0,'inflammatory_nails':0,'blister':0,'red_sore_around_nose':0,'yellow_crust_ooze':0});
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [sub,setSub]= useState(false);
    // 
    const [result,setResults] = useState({"disease": "gregthtrhr","per": 0 , "test":"sxdcfvgbjhnmkl" })
    const [showCheckBoxes,setShowCheckBoxes] =useState(false)
    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setSelectedValues((prevState) => ({
      ...prevState,
      [id]: checked ? 1 : 0, // set value to 1 if checked, 0 otherwise
    }));
    };
    console.log(selectedValues)

    const submit = async() => {
      const response=await axios.post('/',
          selectedValues
      );
      console.log(response.data)
      setResults({"disease": response.data.ans ,"per":response.data.ans_prob, "test":response.data.test})
    }
    //handlesubmit for transfering the data to the backend once the submit button clicked
    const handleSubmit = event => {
      event.preventDefault();
        // const checkboxArray = Object.values(selectedValues);

        // console.log(checkboxArray)
          submit();
          setSelectedValues({'itching':0,'skin_rash':0,'nodal_skin_eruptions':0,
          'continuous_sneezing':0,'shivering':0,'chills':0,'joint_pain':0,'stomach_pain':0,'acidity':0,'ulcers_on_tongue':0,
          'muscle_wasting':0,'vomiting':0,'burning_micturition':0,'spotting_ urination':0,'fatigue':0,'weight_gain':0,'anxiety':0,'cold_hands_and_feets':0,'mood_swings':0,'weight_loss':0,'restlessness':0,'lethargy':0,'patches_in_throat':0,'irregular_sugar_level':0,'cough':0,'high_fever':0,'sunken_eyes':0,'breathlessness':0,'sweating':0,'dehydration':0,'indigestion':0,'headache':0,'yellowish_skin':0,'dark_urine':0,
          'nausea':0,'loss_of_appetite':0,'pain_behind_the_eyes':0,'back_pain':0,'constipation':0,'abdominal_pain':0,'diarrhoea':0,'mild_fever':0,'yellow_urine':0,'yellowing_of_eyes':0,'acute_liver_failure':0,'fluid_overload':0,
          'swelling_of_stomach':0,'swelled_lymph_nodes':0,'malaise':0,'blurred_and_distorted_vision':0,'phlegm':0,'throat_irritation':0,'redness_of_eyes':0,'sinus_pressure':0,'runny_nose':0,'congestion':0,
          'chest_pain':0,'weakness_in_limbs':0,'fast_heart_rate':0,'pain_during_bowel_movements':0,'pain_in_anal_region':0,'bloody_stool':0,'irritation_in_anus':0,'neck_pain':0,'dizziness':0,'cramps':0,
          'bruising':0,'obesity':0,'swollen_legs':0,'swollen_blood_vessels':0,'puffy_face_and_eyes':0,'enlarged_thyroid':0,'brittle_nails':0,'swollen_extremeties':0,'excessive_hunger':0,'extra_marital_contacts':0,'drying_and_tingling_lips':0,
          'slurred_speech':0,'knee_pain':0,'hip_joint_pain':0,'muscle_weakness':0,'stiff_neck':0,'swelling_joints':0,'movement_stiffness':0,'spinning_movements':0,'loss_of_balance':0,'unsteadiness':0,'weakness_of_one_body_side':0,'loss_of_smell':0,'bladder_discomfort':0,
          'foul_smell_of urine':0,'continuous_feel_of_urine':0,'passage_of_gases':0,'internal_itching':0,'toxic_look_(typhos)':0,'depression':0,'irritability':0,'muscle_pain':0,'altered_sensorium':0,'red_spots_over_body':0,'belly_pain':0,
          'abnormal_menstruation':0,'dischromic _patches':0,'watering_from_eyes':0,'increased_appetite':0,'polyuria':0,'family_history':0,'mucoid_sputum':0,'rusty_sputum':0,'lack_of_concentration':0,'visual_disturbances':0,'receiving_blood_transfusion':0,
          'receiving_unsterile_injections':0,'coma':0,'stomach_bleeding':0,'distention_of_abdomen':0,'history_of_alcohol_consumption':0,'fluid_overload.1':0,'blood_in_sputum':0,'prominent_veins_on_calf':0,'palpitations':0,'painful_walking':0,'pus_filled_pimples':0,'blackheads':0,'scurring':0,'skin_peeling':0,'silver_like_dusting':0,'small_dents_in_nails':0,'inflammatory_nails':0,'blister':0,'red_sore_around_nose':0,'yellow_crust_ooze':0});
          setSub(true);
          setSearchResults([]);


        // send checkboxArray using axios
      };
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    // const handleCheckbox = () => {
    //   setIsChecked(!isChecked);
    // };
    const handleSearchBarClick = ()=>{
        setShowCheckBoxes(!showCheckBoxes);
        console.log(showCheckBoxes)
    }
  

    useEffect(() => {
      // Here, you would typically make an API call to fetch the data for the checkboxes
      // For simplicity, we will create an array of items here
      const items = [
        {id: 1, value:"itching"},
{id: 2, value:"skin_rash"},
{id: 3, value:"nodal_skin_eruptions"},
{id: 4, value:"continuous_sneezing"},
{id: 5, value:"shivering"},
{id: 6, value:"chills"},
{id: 7, value:"joint_pain"},
{id: 8, value:"stomach_pain"},
{id: 9, value:"acidity"},
{id: 10, value:"ulcers_on_tongue"},
{id: 11, value:"muscle_wasting"},
{id: 12, value:"vomiting"},
{id: 13, value:"burning_micturition"},
{id: 14, value:"spotting_ urination"},
{id: 15, value:"fatigue"},
{id: 16, value:"weight_gain"},
{id: 17, value:"anxiety"},
{id: 18, value:"cold_hands_and_feets"},
{id: 19, value:"mood_swings"},
{id: 20, value:"weight_loss"},
{id: 21, value:"restlessness"},
{id: 22, value:"lethargy"},
{id: 23, value:"patches_in_throat"},
{id: 24, value:"irregular_sugar_level"},
{id: 25, value:"cough"},
{id: 26, value:"high_fever"},
{id: 27, value:"sunken_eyes"},
{id: 28, value:"breathlessness"},
{id: 29, value:"sweating"},
{id: 30, value:"dehydration"},
{id: 31, value:"indigestion"},
{id: 32, value:"headache"},
{id: 33, value:"yellowish_skin"},
{id: 34, value:"dark_urine"},
{id: 35, value:"nausea"},
{id: 36, value:"loss_of_appetite"},
{id: 37, value:"pain_behind_the_eyes"},
{id: 38, value:"back_pain"},
{id: 39, value:"constipation"},
{id: 40, value:"abdominal_pain"},
{id: 41, value:"diarrhoea"},
{id: 42, value:"mild_fever"},
{id: 43, value:"yellow_urine"},
{id: 44, value:"yellowing_of_eyes"},
{id: 45, value:"acute_liver_failure"},
{id: 46, value:"fluid_overload"},
{id: 47, value:"swelling_of_stomach"},
{id: 48, value:"swelled_lymph_nodes"},
{id: 49, value:"malaise"},
{id: 50, value:"blurred_and_distorted_vision"},
{id: 51, value:"phlegm"},
{id: 52, value:"throat_irritation"},
{id: 53, value:"redness_of_eyes"},
{id: 54, value:"sinus_pressure"},
{id: 55, value:"runny_nose"},
{id: 56, value:"congestion"},
{id: 57, value:"chest_pain"},
{id: 58, value:"weakness_in_limbs"},
{id: 59, value:"fast_heart_rate"},
{id: 60, value:"pain_during_bowel_movements"},
{id: 61, value:"pain_in_anal_region"},
{id: 62, value:"bloody_stool"},
{id: 63, value:"irritation_in_anus"},
{id: 64, value:"neck_pain"},
{id: 65, value:"dizziness"},
{id: 66, value:"cramps"},
{id: 67, value:"bruising"},
{id: 68, value:"obesity"},
{id: 69, value:"swollen_legs"},
{id: 70, value:"swollen_blood_vessels"},
{id: 71, value:"puffy_face_and_eyes"},
{id: 72, value:"enlarged_thyroid"},
{id: 73, value:"brittle_nails"},
{id: 74, value:"swollen_extremeties"},
{id: 75, value:"excessive_hunger"},
{id: 76, value:"extra_marital_contacts"},
{id: 77, value:"drying_and_tingling_lips"},
{id: 78, value:"slurred_speech"},
{id: 79, value:"knee_pain"},
{id: 80, value:"hip_joint_pain"},
{id: 81, value:"muscle_weakness"},
{id: 82, value:"stiff_neck"},
{id: 83, value:"swelling_joints"},
{id: 84, value:"movement_stiffness"},
{id: 85, value:"spinning_movements"},
{id: 86, value:"loss_of_balance"},
{id: 87, value:"unsteadiness"},
{id: 88, value:"weakness_of_one_body_side"},
{id: 89, value:"loss_of_smell"},
{id: 90, value:"bladder_discomfort"},
{id: 91, value:"foul_smell_of urine"},
{id: 92, value:"continuous_feel_of_urine"},
{id: 93, value:"passage_of_gases"},
{id: 94, value:"internal_itching"},
{id: 95, value:"toxic_look_(typhos)"},
{id: 96, value:"depression"},
{id: 97, value:"irritability"},
{id: 98, value:"muscle_pain"},
{id: 99, value:"altered_sensorium"},
{id: 100, value:"red_spots_over_body"},
{id: 101, value:"belly_pain"},
{id: 102, value:"abnormal_menstruation"},
{id: 103, value:"dischromic _patches"},
{id: 104, value:"watering_from_eyes"},
{id: 105, value:"increased_appetite"},
{id: 106, value:"polyuria"},
{id: 107, value:"family_history"},
{id: 108, value:"mucoid_sputum"},
{id: 109, value:"rusty_sputum"},
{id: 110, value:"lack_of_concentration"},
{id: 111, value:"visual_disturbances"},
{id: 112, value:"receiving_blood_transfusion"},
{id: 113, value:"receiving_unsterile_injections"},
{id: 114, value:"coma"},
{id: 115, value:"stomach_bleeding"},
{id: 116, value:"distention_of_abdomen"},
{id: 117, value:"history_of_alcohol_consumption"},
{id: 118, value:"fluid_overload.1"},
{id: 119, value:"blood_in_sputum"},
{id: 120, value:"prominent_veins_on_calf"},
{id: 121, value:"palpitations"},
{id: 122, value:"painful_walking"},
{id: 123, value:"pus_filled_pimples"},
{id: 124, value:"blackheads"},
{id: 125, value:"scurring"},
{id: 126, value:"skin_peeling"},
{id: 127, value:"silver_like_dusting"},
{id: 128, value:"small_dents_in_nails"},
{id: 129, value:"inflammatory_nails"},
{id: 130, value:"blister"},
{id: 131, value:"red_sore_around_nose"},
{id: 132, value:"yellow_crust_ooze"}
      ];
  
      const results = items.filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setSearchResults(results);
    }, [searchTerm]);
  
    return (
      <div className="container">
        <input
          className="searchbox"
          onClick={handleSearchBarClick}
          type="text"
          placeholder="Write down your symptoms..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.length >= 0 && (
          <div>
            <div className="lstcontainer">
            {searchResults.map((item) => (
              (showCheckBoxes && (
                <div key={item.id}>
                    <CheckBox onCheckboxChange={handleCheckboxChange} label={item.value} disText={item.desc}/>
                </div>))
            ))}
            
            { sub===true ? <div>
          <br></br>
          <br></br>
          <div className="resultpop">
            <p>You have {result.per.toFixed(2)} persent of having {result.disease}</p>
            <p>It is advised to take the following tests to confirm:- </p>
            <p>{result.test}</p>
          </div>
          
    </div> : <></>
    }
            </div>
            <button className="submitbtn" onClick={handleSubmit} >Submit</button>
          </div>
        )}
        
      </div>
    );
  }

  export default Search