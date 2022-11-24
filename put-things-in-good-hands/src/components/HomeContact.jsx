import ContactForm from "./ContactForm";
import HomeFooter from "./HomeFooter";

const HomeContact = () => {

    return (
        <div className='contact' id='contact'>
            <div className="contact__cover">
                <ContactForm/>
                <HomeFooter/>
            </div>

        </div>
    );
};

export default HomeContact;