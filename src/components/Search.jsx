import React,{useEffect,useState} from "react"
import CheckBox from "./CheckBox";
import "../styles/search.css"

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [showCheckBoxes,setShowCheckBoxes] =useState(false)
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleCheckbox = () => {
      setIsChecked(!isChecked);
    };
    const handleSearchBarClick = ()=>{
        setShowCheckBoxes(!showCheckBoxes)
    }
  
    useEffect(() => {
      // Here, you would typically make an API call to fetch the data for the checkboxes
      // For simplicity, we will create an array of items here
      const items = [
        { id: 1, value: "Blu" ,desc:"Desc1"},
        { id: 2, value: "Bluetoot", desc:"Desc2" },
        { id: 3, value: "Bluetooth",desc:"Desc3" },
        { id: 4, value: "Wifif",desc:"Desc4"},
        { id: 5, value: "Item 5",desc:"Desc5"},
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
        {searchResults.length > 0 && (
          <div>
            <div className="container">
            {searchResults.map((item) => (
              (showCheckBoxes && (
                <div key={item.id}>
                    <CheckBox label={item.value} disText={item.desc}/>
                </div>))
            ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  export default Search