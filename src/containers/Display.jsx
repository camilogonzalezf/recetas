import React from 'react';
import Recipe from '../components/Recipe';
import '../styles/Display.scss';

const Display = ({recipes}) => {
   
    return (
            <section className="main">
                <div className="Display">
                    {recipes.map(recipe =>(
                        <Recipe recipe = {recipe} key={recipe.idMeal}/>
                    ))}
                </div>
            </section>
    );
}

export default Display;