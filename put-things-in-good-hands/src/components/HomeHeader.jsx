import React from "react";
import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import { Link } from 'react-scroll'
import { Link as RouterLink } from "react-router-dom";
import { headerData } from "./headerData";

const HomeHeader = () => {
    return (
        <header className='header'>
            <div className='header__left-column'>
                <img src={HomeHeroImage} alt=""/>
            </div>
            <div className="header__right-column">
                <div className="header__login">
                    <RouterLink className="header__link" to={'/logowanie'}>Zaloguj</RouterLink>
                    <RouterLink className="header__link header__link--register" to={'/rejestracja'}>Załóż konto</RouterLink>
                </div>
                <div className="header__menu">
                    <nav>
                        <ul className='manu-list'>
                            {headerData.map((e,i) => {
                                return (
                                    <Link className={e.Name} key={i} to={`${e.path}`} spy={true} smooth={true}>{e.title}</Link>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;