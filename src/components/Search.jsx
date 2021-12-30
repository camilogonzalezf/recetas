import React from 'react';
import '../styles/Search.scss';
import iconSearch from '../assets/search.png';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import useSearchState from '../hooks/useSearchState.js';
import { useEffect, useState } from "react";
import axios from "axios";


const Search = () => {

    const [search, setSearch] = useState([]);
    const {addListHome} = useContext(AppContext);

    const handleListHome = () =>{
        const textSearch = document.getElementById('textSearch');
        const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+textSearch;
    }


    return (
        <div className="Search">
            <div className='Search__title'>
                <p>RECETAS</p>
            </div>
            <div className='Search__input'>
                <input  type="text" placeholder="Search by name" id="text-search"/>
                <button className='button__search' onClick={()=>handleListHome()}>
                    <img src={iconSearch} alt="lupa"/>
                </button>
                
            </div>
        </div>
    );
}

export default Search;