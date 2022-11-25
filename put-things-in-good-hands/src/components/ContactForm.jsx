import Decoration from "../assets/Decoration.svg";

const ContactForm = () => {
    return(

    <div className='contact__container'>
        <h1 className="contact__title">Skontaktuj się z nami</h1>
        <img src={Decoration} className="contact__decor" alt="" />
        <form className="contact__form">
            <div className="contact__form-container">
                <div className="contact__userinfo">
                    <div className="contact__userinfo-item">
                        <label className="contact__label">Wpisz imię</label>
                        <input className='contact__input' type="text" name='name' />
                        <span id='name-error'>Podane imię jest nieprawidłowe!</span>
                    </div>
                    <div className="contact__userinfo-item">
                        <label className="contact__label">Wpisz swój email</label>
                        <input className='contact__input'  name='email' />
                        <span id='email-error'>Podany mail jest nieprawidłowy!</span>
                    </div>
                </div>
                <div className="contact__msg">
                    <label className="contact__label">Wpisz swoją wiadomość</label>
                    <textarea  className="contact__textarea" name="message" />
                    <span id='msg-error'> Wiadomość musi mieć conajmniej 120 znaków!</span>
                </div>
            </div>
            <button className="button--small" type='submit'>Wyślij</button>
        </form>
    </div>
    )
}

export default ContactForm;