import React from 'react';
import Search from '../components/Search';
import Display from '../containers/Display';
import Buttons from '../containers/Buttons';
import Banner from '../components/Banner';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import '../styles/Home.scss';
const Home = () => {
    const {listHome}  = useContext(AppContext);
    
    return (
        <div className='Home'>
            <Banner/>
            <Search/>
            <Buttons/>
            <Display recipes = { listHome } />
        </div>
    );
}

export default Home;

//<Display recipes = { listHome } />