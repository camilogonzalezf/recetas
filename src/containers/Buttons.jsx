import React from 'react';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import '../styles/Buttons.scss';

const Buttons = () => {
    const { firstList, 
            beef, 
            lamb,
            seafood,
            breakfast,
            goat,
            addListHome,
        } = useContext(AppContext);

    const handleListHome=(listRecipes) =>{
        addListHome(listRecipes);
    }

    return (
        <div className='buttons'>
            <button className='buttons__categories' onClick={()=>handleListHome(firstList)}>Top 10</button>
            <button className='buttons__categories' onClick={()=>handleListHome(beef)}>Beef ({beef.length}) </button>
            <button className='buttons__categories' onClick={()=>handleListHome(lamb)}>Lamb ({lamb.length})</button>
            <button className='buttons__categories' onClick={()=>handleListHome(seafood)}>Seafood ({seafood.length})</button>
            <button className='buttons__categories' onClick={()=>handleListHome(breakfast)}>Breakfast ({breakfast.length})</button>
            <button className='buttons__categories' onClick={()=>handleListHome(goat)}>Goat ({goat.length})</button>
        </div>
    );
}

export default Buttons;