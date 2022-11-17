import React from "react";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

const HomeSteps = () => {

    return (
        <section className='steps'>
            <h1 className='steps__title'> Wystarczą 4 proste kroki</h1>
            <img className="decor" src={Decoration} alt="" />
            <div className="steps__item">
                <img className="icon1" src={Icon1} alt="" />
                <h2 className='steps__subtitle'>Wybierz rzeczy</h2>
                <h3 className="steps__text">ubrania, zabawki, sprzęt i inne</h3>
            </div>
            <div className="steps__item">
                <img className="icon2" src={Icon2} alt="" />
                <h2 className='steps__subtitle'>Spakuj je</h2>
                <h3 className="steps__text">skorzystaj z worków na śmieci</h3>
            </div>
            <div className="steps__item">
                <img className="icon3" src={Icon3} alt="" />
                <h2 className='steps__subtitle'>Zdecyduj komu chcesz pomóc</h2>
                <h3 className="steps__text">wybuerz zaufane miejsce</h3>
            </div>
            <div className="steps__item">
                <img className="icon4" src={Icon4} alt="" />
                <h2 className='steps__subtitle'>Zamów kuriera</h2>
                <h3 className="steps__text">kurier przyjedzie w dogodnym terminie</h3>
            </div>
            <button className="steps__button">ODDAJ RZECZY</button>
        </section>
    );
}

export default HomeSteps;