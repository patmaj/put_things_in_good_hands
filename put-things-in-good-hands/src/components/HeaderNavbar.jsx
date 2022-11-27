import {headerData} from "./headerData";
import {Link} from "react-scroll";
import React from "react";

const HeaderNavbar = () => {
    return (
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
    )
}

export default HeaderNavbar;