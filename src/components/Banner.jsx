import React from 'react';
import '../styles/Banner.scss';
import botones from '../assets/botones.png'; 

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-txt1">
                <p>" People who loves to eat are always Best People</p>
            </div>
            <div className="banner-txt2">
                <p>"</p>
            </div>
            <div className="banner-txt3">
               <p>JULIA CHILD</p> 
            </div>
            <div className="bannerImg">
                    <div className="bannerImg-text">
                        <p>Encuentra Las Mejores Recetas Para ti Y Tu Familia</p>
                    </div>
                    <div className="bannerImg-botones">
                        <img src={botones} alt='botones'/>
                    </div>
            </div>
        </div>
    );
}

export default Banner;

/**


 */