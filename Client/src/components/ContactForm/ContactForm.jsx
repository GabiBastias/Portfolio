/* eslint-disable react/prop-types */
import emailJS from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import validator from '../../services/validator/inputContactMeValidator';
import styles from "./contactForm.module.css";
const serviceEmailID = import.meta.env.VITE_SERVICE_EMAILJS_ID;
const templateEmailID = import.meta.env.VITE_TEMPLATE_EMAILJS_ID;
const keyEmailID = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

const ContactForm = ({manipulate, handleClose, language}) => {

    const form = useRef();

    const [ userMessage, setUserMessage ] = useState({
        user_email: "",
        user_name: "",
        message: ""
    });

    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        const formContact = document.getElementById("contactForm");
        if (manipulate === true) {
            formContact.classList.add("formContactMe");
            formContact.classList.remove("showOrNot")
        } else {
            formContact.classList.add("showOrNot")
            formContact.classList.remove("formContactMe");
        }
        const disableBtn = document.getElementById("sentBtn")
        return () => disableBtn.disabled = true;
    }, [manipulate]);

    const handleChange = (event) => {
        const updateUserMessage = {...userMessage, [event.target.name]: event.target.value};
        setUserMessage(updateUserMessage);

        const validateErrors = validator(updateUserMessage);
        setErrors(validateErrors);

        document.getElementById("sentBtn").disabled = Object.keys(validateErrors).length > 0;
    }
    
    const clearForm = () => {
        setUserMessage({
            user_email: "",
            user_name: "",
            message: ""
        });
        handleClose();
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        emailJS.sendForm(serviceEmailID, templateEmailID, form.current, keyEmailID)
        .then(() => {
            alert("Email submited! \nHave a great day, i contact you soon!");
        }, (error) => {
            alert(error.text);
        });
        clearForm();
    }

    return(
        <form className="formContactMe" ref={form} id="contactForm" onSubmit={handleOnSubmit}>
            <fieldset className={styles.fieldsetContactMe}>
                <legend className={styles.legendContactMe}><b>{language === "Spanish" ? 'Contactame!' : 'Contact Me!'}</b></legend>
                <label className={styles.labelContactMe} name='user_email'>{language === "Spanish" ? "Correo" : "Email" }</label>
                <input 
                    type="email" 
                    name="user_email" 
                    value={userMessage.user_email} 
                    placeholder={language === "Spanish" ? "Tu correo..." : "Your email..." }
                    onChange={handleChange}
                />
                {
                    errors.user_email ? <span className={styles.spanContactMe}>{errors.user_email}</span> : null
                }
                <br />
                <label className={styles.labelContactMe} name='user_name'>{language === "Spanish" ? "Nombre" : "Name" }</label>
                <input 
                    type="text" 
                    name="user_name" 
                    value={userMessage.user_name} 
                    placeholder={language === "Spanish" ? "Tu nombre..." : "Your name..." }
                    onChange={handleChange}
                />
                {
                    errors.user_name ? <span className={styles.spanContactMe}>{errors.user_name}</span> : null
                }
                <br />
                <label className={styles.labelContactMe} name='message'>{language === "Spanish" ? "Mensaje" : "Message" }</label>
                <textarea 
                    placeholder={language === "Spanish" ? "Tu mensaje..." : "Your message..." }
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
                <button disabled="true" type="submit" id="sentBtn" value="send" >{language === "Spanish" ?'ENVIAR':'SEND'}</button>
                <button type="button" className={styles.btnClose} onClick={clearForm}>X</button>
            </fieldset>
        </form>
    )
}

export default ContactForm;
