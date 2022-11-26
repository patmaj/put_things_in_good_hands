import React, {useState,useEffect} from "react";
import Decoration from "../assets/Decoration.svg";

const ContactForm = () => {
    const initialValues = {name: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(()=> {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }
    }, [isSubmit])


    const validate = (values) => {
        const errors = {};
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name || values.split('').length > 1) {
            errors.name = "Podane imię jest nieprawidłowe!"
        }
        if(!values.email || !re.test(values.email)) {
            errors.email = "Podany email jest nieprawidłowy!"
        }
        if(values.message.length < 120) {
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
        }
        return errors;
    };

    return(

    <div className='contact__container'>
        <h1 className="contact__title">Skontaktuj się z nami</h1>
        <img src={Decoration} className="contact__decor" alt="" />
        {Object.keys(formErrors).length === 0 && isSubmit &&
            <spam className="contact__msg-success">Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy</spam>}
        <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-container">
                <div className="contact__userinfo">
                    <div className="contact__userinfo-item">
                        <label className="contact__label">Wpisz imię</label>
                        <input className={formErrors.name ? 'contact__input--active' : 'contact__input'}
                               type="text" name='name' value={formValues.name} onChange={handleChange} />
                        <span className='contact__error'>{formErrors.name}</span>
                    </div>
                    <div className="contact__userinfo-item">
                        <label className="contact__label">Wpisz swój email</label>
                        <input className={formErrors.email ? "contact__input--active" : "contact__input"}
                               name='email' value={formValues.email} onChange={handleChange}/>
                        <span className='contact__error'>{formErrors.email}</span>
                    </div>
                </div>
                <div className="contact__msg">
                    <label className="contact__label">Wpisz swoją wiadomość</label>
                    <textarea  className={formErrors.message ?"contact__textarea--active" : "contact__textarea"}
                               name="message" value={formValues.message} onChange={handleChange}/>
                    <span className='contact__error'>{formErrors.message}</span>
                </div>
            </div>
            <button className="button--small" type='submit'>Wyślij</button>
        </form>
    </div>
    )
}

export default ContactForm;