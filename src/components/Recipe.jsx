import React from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import '../styles/Recipe.scss';
import Heart from '../assets/heart.png';
import Stars from '../assets/stars.png';
import Clock from '../assets/clock.png';

const Recipe = ({ recipe }) => {

    const { addRecipe } = useContext(AppContext);
    const ruta = '/recipe/'+recipe.idMeal;

    const handleRecipe = () =>{
        addRecipe(recipe);
    }

    return (
            <NavLink style={{ textDecoration: 'none', color: 'black'}} to={ruta} onClick={()=>handleRecipe(recipe.idMeal)}>
                <section className='recipe'>
                    <img className='recipe__img' src={recipe.strMealThumb} alt='recipe'/>
                    <div className="recipe__name">
                        <p>{recipe.strMeal} </p>
                        <img className='heart' src={Heart} alt='heart'/>
                    </div>
                    <div className="recipe__stars">
                        <img className='stars' src={Stars} alt='stars'/>
                        <p>45 Reviwes</p>
                    </div>
                    <div className="recipe__area">
                        <div className='recipe__area-location'> 
                            <p>{recipe.strArea}</p>
                        </div>
                        <div> 
                            <div className='recipe__area-clock'> 
                                <img className='clock' src={Clock} alt='clock'/>
                                <p>25-35</p>
                            </div>
                        </div>
                    </div>
                </section>
            </NavLink>
    );
}

export default Recipe;

// <img src={recipe.strMealThumb} alt='recipe'/> <h1>{recipe.strMeal}</h1>