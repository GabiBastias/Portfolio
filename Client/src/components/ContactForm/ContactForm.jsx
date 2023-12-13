import emailJS from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import validator from '../../services/validator/inputContactMeValidator';
import styles from "./contactForm.module.css";
const serviceEmailID = import.meta.env.VITE_SERVICE_EMAILJS_ID;
const templateEmailID = import.meta.env.VITE_TEMPLATE_EMAILJS_ID;
const keyEmailID = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

const ContactForm = () => {

    const form = useRef();

    const [ userMessage, setUserMessage ] = useState({
        user_email: "",
        user_name: "",
        message: ""
    });

    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        document.getElementById("sentBtn").disabled = false;
    }, []);

    const handleChange = (event) => {
        const updateUserMessage = {...userMessage, [event.target.name]: event.target.value};
        setUserMessage(updateUserMessage);

        const validateErrors = validator(updateUserMessage);
        setErrors(validateErrors);

        document.getElementById("sentBtn").disabled = Object.keys(validateErrors).length > 0;
    }


    const handleOnSubmit = (event) => {
        event.preventDefault();
        emailJS.sendForm(serviceEmailID, templateEmailID, form.current, keyEmailID)
        .then((result) => {
            console.log(result.text);
            console.log(result.status);
            alert("Email submited! \nHave a great day, soon i contact you!");
            setUserMessage({
                user_email: "",
                user_name: "",
                message: ""
            });
        }, (error) => {
            alert(error.text);
            console.log(error.text);
        });
    }

    return(
        <article className={styles.articleContactMe}>
            <form className={styles.formContactMe} ref={form} onSubmit={handleOnSubmit}>
                <fieldset className={styles.fieldsetContactMe}>
                    <legend className={styles.legendContactMe}><b>Contact Me!</b></legend>
                    <label className={styles.labelContactMe} name='user_email'>Email: </label>
                    <input 
                        type="email" 
                        name="user_email" 
                        value={userMessage.user_email} 
                        placeholder="Your email..."
                        onChange={handleChange}
                    />
                    {
                        errors.user_email ? <span className={styles.spanContactMe}>{errors.user_email}</span> : null
                    }
                    <br />
                    <label className={styles.labelContactMe} name='user_name'>Name: </label>
                    <input 
                        type="text" 
                        name="user_name" 
                        value={userMessage.user_name} 
                        placeholder="Your name..."
                        onChange={handleChange}
                    />
                    {
                        errors.user_name ? <span className={styles.spanContactMe}>{errors.user_name}</span> : null
                    }
                    <br />
                    <label className={styles.labelContactMe} name='message'>Message: </label>
                    <textarea 
                        placeholder="Your message..." 
                        cols="30" rows="10" 
                        name="message" 
                        value={userMessage.message}
                        onChange={handleChange}
                        className={styles.inputContactMe}
                    ></textarea>
                    {
                        errors.message ? <span className={styles.spanContactMe}>{errors.message}</span> : null
                    }
                    <br />
                    <button type="submit" id="sentBtn" value="send" >SEND</button>
                </fieldset>
            </form>
        </article>
    )
}

export default ContactForm;
