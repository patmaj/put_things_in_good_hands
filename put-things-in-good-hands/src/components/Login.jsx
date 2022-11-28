import HeaderLoginRegister from "./HeaderLoginRegister";
import HeaderNavbar from "./HeaderNavbar";
import Decoration from "../assets/Decoration.svg";
import {useState, useEffect} from "react";

const Login = () => {
    const [formValues, setFormValues] = useState({email: "", password:""});
    const [errors, setErrors] = useState({email: ""});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const validate = (values) => {
        const errors = {};
        const {email, password} = values;
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
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
    }

    useEffect(() => {
        Object.keys(errors).length === 0 ? setIsSubmit(true) : setIsSubmit(false);
        console.log(errors)
        console.log(isSubmit)
    }, [errors, isSubmit])


    return (
        <section className="login">
          <div className="header__right--column">
              <HeaderLoginRegister />
              <HeaderNavbar />
          </div>
          <div className="login__container">
              <h1 className="login__title">Zaloguj się</h1>
              <img src={Decoration}  className="contact__decor" alt=""/>
              <form className="login__form" onSubmit={handleSubmit}>
                 <div className="login__form-container">
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
                          <span className="login__error">{errors.password}</span>
                      </div>
                  </div>
                 </div>
                  <div className="login__buttoms-container">
                      <button className="button--small" disabled={true}>Załóż konto</button>
                      <button className="button--small active" type="submit">Zaloguj się</button>
                  </div>
              </form>
          </div>
        </section>
    );
};

export default Login;