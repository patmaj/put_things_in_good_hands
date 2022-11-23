import Decoration from '../assets/Decoration.svg';

const HomeContact = () => {

    return (
        <div className='contact' id='contact'>
            <div className='contact__container'>
                <h1 className="contact__title">Skontaktuj się z nami</h1>
                <img src={Decoration} className="contact__decor" alt="" />

            </div>

        </div>
    );
}

export default HomeContact;