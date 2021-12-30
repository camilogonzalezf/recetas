import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

const useSearchState = (textSearch) => {

    const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+textSearch;
    
    const [search, setSearch] = useState([]);

    useEffect(async()=>{
            const response = await axios(API);
            setSearch(response.data.meals);
            console.log(search);
    }, [] );

    return { search };
}

export default useSearchState;