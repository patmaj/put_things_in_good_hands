import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg"
import People from "../assets/People.jpg"
import React from "react";

const HomeAbout = () => {

    return (
        <section className='about' id='about'>
            <div className="about__left--column">
                <h1 className="about__title">O nas</h1>
                <img className="decor" src={Decoration} alt="" />
                <p className="about__content">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} alt="" />
            </div>
            <div className="about__right--column">
                <img className='about__img' src={People} alt="" />
            </div>
        </section>
    );
}

export default HomeAbout;