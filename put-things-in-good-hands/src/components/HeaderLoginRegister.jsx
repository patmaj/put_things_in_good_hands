import {Link as RouterLink} from "react-router-dom";
import React from "react";

const HeaderLoginRegister = () => {
     return (
         <div className="header__login">
             <RouterLink className="header__link" to={'/logowanie'}>Zaloguj</RouterLink>
             <RouterLink className="header__link header__link--register" to={'/rejestracja'}>Załóż konto</RouterLink>
         </div>
     )
}

export default HeaderLoginRegister;