import React from "react";
import Decoration from '../assets/Decoration.svg';
import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import { headerData } from "./headerData";
import HeaderLoginRegister from "./HeaderLoginRegister";
import HeaderNavbar from "./HeaderNavbar";


const HomeHeader = () => {
    return (
        <header className='header' id='start'>
            <div className='header__left-column'>
                <img src={HomeHeroImage} alt=""/>
            </div>
            <div className="header__right-column">
              <HeaderLoginRegister />
              <HeaderNavbar />
                <div className="header__intro">
                    <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="decor" src={Decoration} alt="" />
                    <div className="buttons">
                        <RouterLink className='buttons__item' to={'/login'}>ODDAJ RZECZY</RouterLink>
                        <RouterLink className='buttons__item' to={'/login'}>ZORGANIZUJ ZBIÓRKĘ</RouterLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;