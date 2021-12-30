import '../styles/global.css' 
import Header from '../containers/Header';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from '../containers/Layout';
import Home from '../pages/Home.jsx';
import RecipeView from '../pages/RecipeView.jsx';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
    const initialState = useInitialState(); 

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                <Header />
                    <Routes>
                        <Route  path= "/recetas" element={<Home/>} />
                        <Route  path= "/recipe/:id" element={<RecipeView/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>    
      </AppContext.Provider>
 )
}
export default App;