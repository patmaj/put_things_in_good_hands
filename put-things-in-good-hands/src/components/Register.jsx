import HeaderLoginRegister from "./HeaderLoginRegister";
import HeaderNavbar from "./HeaderNavbar";
import Decoration from "../assets/Decoration.svg";
import {Link as RouterLink} from "react-router-dom";
import React, {useEffect, useState} from "react";

const Register = () => {

    const [formValues, setFormValues] = useState({email: "", password:"", password2:""});
    const [errors, setErrors] = useState({email: ""});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const validate = (values) => {
        const errors = {};
        const {email, password, password2} = values;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email) {
            errors.email = "Brak email";
        } else if (!regex.test(email)) {
            errors.email = "Podany email jest nieprawidłowy";
        }
        if (!password) {
            errors.password = "Brak hasła"
        } else if (password.length < 6) {
            errors.password = "Podane hasło jest za krótkie"
        }
        if (!password2) {
            errors.password2 = "Brak hasła"
        } else if (password.length < 6) {
            errors.password = "Podane hasło jest za krótkie"
        }
        if (password2.length < 6) {
            errors.password2 = "Podane hasło jest za krótkie"
        } else if (password !== password2) {
            errors.password = "Hasła muszą być identyczne"
        }
        if (password2 !== password) {
            errors.password2 = "Hasła muszą być identyczne"
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
    }

    useEffect(() => {
        Object.keys(errors).length === 0 ? setIsSubmit(true) : setIsSubmit(false);
        console.log(isSubmit)
    }, [errors, isSubmit])

    return (
        <div>
            <section className="register">
                <div className="header__right--column">
                    <HeaderLoginRegister />
                    <HeaderNavbar />
                </div>
                <div className="register__container">
                    <h1 className="register__title">Załóż konto</h1>
                    <img src={Decoration}  className="contact__decor" alt=""/>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__form-container">
                            <div className="login__userinfo">
                                <div className="login__userinfo-item">
                                    <label className="login__label">Email</label>
                                    <input className={errors.email ? "login__input--active" : "login__input"}
                                           type="text" name="email" value={formValues.email}
                                           onChange={handleChange}/>
                                    <span className="login__error">{errors.email}</span>
                                </div>
                                <div className="login__userinfo-item">
                                    <label className="login__label">Hasło</label>
                                    <input className={errors.password ? "login__input--active" : "login__input"}
                                           type="text" name="password" value={formValues.password}
                                           onChange={handleChange}/>
                                </div>
                                    <div className="login__userinfo-item">
                                        <label className="login__label">Powtórz hasło</label>
                                        <input className={errors.password ? "login__input--active" : "login__input"}
                                               type="text" name="password2" value={formValues.password2}
                                               onChange={handleChange}/>
                                    <span className="login__error">{errors.password2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="login__buttons-container">
                            <RouterLink className="button" to={'/rejestracja'}>Załóż konto</RouterLink>
                            <button className="button" type="submit">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>);

};

export default Register;