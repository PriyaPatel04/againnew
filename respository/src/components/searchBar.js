import React, {useEffect, useState} from 'react';

import {FaSearch} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import "./searchBar.css";

export const SearchBar = ({placeholder,data}) => {
    const [filteredData, setFilteredData] = useState([]);
    const[wordEntered,setWordEntered] = useState("")
    useEffect(()=> {

    })

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        // setFilteredData(newFilter);
        if (searchWord === "") {
            setFilteredData([]);
          }
        else {
            setFilteredData(newFilter);
          }

    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };
    

    
    return(
    <div className="input-wrapper">
         
          <div className="given-input">
               
                <input type="text"  placeholder={placeholder} value={wordEntered}
                 onChange={handleFilter}  onClick={filteredData} />
                    <div id="search-icon" >
                       {filteredData.length === 0 ? (
                       < FaSearch />):
                       (<IoIosClose id="clearBtn" />)}

                 {/* <div className='submit'>   
                    <button onClick="submitted()">submit</button> */}
                    </div>
           </div> 
    {/* </div>  */}

         
        {filteredData.length != 0 && (
            <div className="result-data" >
                {filteredData.slice(0,4).map((value, key) => {
                    return(
                        <a className="result-items" href={value.link} target="_blank">
                            <p className="result-bar" >{value.name}</p></a>
                );
        })}
            </div>
)}
    </div>

    )
}

export default SearchBar;
