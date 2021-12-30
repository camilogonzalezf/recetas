import React from 'react';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import '../styles/RecipeView.scss';
import botones from '../assets/botones.png';

const RecipeView = () => {
     
    const { recipeView } = useContext(AppContext);
    const url = recipeView.strMealThumb;
    console.log(recipeView);
    
    return (
        <div className='recipeView'>
            <div className='recipeView__img' style={{ backgroundImage: `url(${url})`}}>
                <div className="recipeView__botones">
                    <img src={botones} alt='botones'/>
                </div>
            </div>
            <div className='recipeView__title'>
                <p>{recipeView.strMeal}</p>
            </div>

            <div className='recipeView__descripction'>
                <p>{recipeView.strInstructions}</p>
            </div>

        </div>
    );
}

export default RecipeView;