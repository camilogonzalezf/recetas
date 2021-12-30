import { useEffect, useState } from "react";
import axios from "axios";
import APIrecipes from '../API/api';

const useInitialState = () => {

    const [recipeView, setRecipe] = useState('0');

    const API1 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken';
    const API2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Beef';
    const API3 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Lamb';
    const API4 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Seafood';
    const API5 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Breakfast';
    const API6 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Goat';


    const [listHome, setListHome] = useState([]);
    const [firstList, setFirstList] = useState([]);
    const [beef, setBeef] = useState([]);
    const [lamb, setLamb] = useState([]);
    const [seafood, setSeafood] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    const [goat, setGoat] = useState([]);

    useEffect(async()=>{
            const response1 = await axios(API1);
            const response2 = await axios(API2);
            const response3 = await axios(API3);
            const response4 = await axios(API4);
            const response5 = await axios(API5);
            const response6 = await axios(API6);

            let arr=[];
            for(let i=0; i < 10; i++){
                arr.push(response1.data.meals[i]);
            }
            setFirstList(arr);
            setListHome(arr);
            setBeef(response2.data.meals);
            setLamb(response3.data.meals);
            setSeafood(response4.data.meals);
            setBreakfast(response5.data.meals);
            setGoat(response6.data.meals);
    }, [] )

    const addRecipe = (id) => {
        setRecipe(id);
    }

    const addListHome = (recipes)=> {
        setListHome(recipes);
    }
    
    return {
            firstList,
            listHome , 
            addListHome,
            addRecipe,
            beef,
            lamb,
            seafood,
            breakfast,
            goat,
            recipeView
        } ;
}

export default useInitialState;
