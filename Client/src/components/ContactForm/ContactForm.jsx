import emailJS from '@emailjs/browser';
import { useRef, useState } from "react";
import validator from '../../services/validator/inputValidator';
// import styles from "./contactForm.module.css";
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

    const handleChange = (event) => {
        setUserMessage({...userMessage, [event.target.name]: event.target.value});
        setErrors(validator({...userMessage, [event.target.name]: event.target.value}));
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        emailJS.sendForm(serviceEmailID, templateEmailID, form.current, keyEmailID)
        .then((result) => {
            console.log(result.text);
            console.log(result.status);
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <>
            <form ref={form} onSubmit={handleOnSubmit}>
                <label name='user_email'>Email: </label>
                <input 
                    type="text" 
                    name="user_email" 
                    value={userMessage.user_email} 
                    placeholder="Your email..."
                    onChange={handleChange}
                />
                <br />
                {
                    errors.user_email ? <span>{errors.user_email}</span> : null
                }
                <br />
                <label name='user_name'>Name: </label>
                <input 
                    type="text" 
                    name="user_name" 
                    value={userMessage.user_name} 
                    placeholder="Your name..."
                    onChange={handleChange}
                />
                <br />
                {
                    errors.user_name ? <span>{errors.user_name}</span> : null
                }
                <label name='message'>Message: </label>
                <br />
                <textarea 
                    placeholder="Your message..." 
                    cols="30" rows="10" 
                    name="message" 
                    value={userMessage.description}
                    onChange={handleChange}
                ></textarea>
                <br />
                {
                    errors.message ? <span>{errors.message}</span> : null
                }
                <br />
                <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default ContactForm;

/* <form ref={form} onSubmit={handleOnSubmit}>
    <label>Email: </label>
    <input type="text" name="user_email" value={message.email} placeholder="Your email..."/>
    <br />
    <label>Name: </label>
    <input type="text" name="user_name" value={message.name} placeholder="Your name..."/>
    <br />
    <label>Message: </label>
    <br />
    <textarea placeholder="Your message..." cols="30" rows="10" name="message" value={message.description} ></textarea>
    <input type="submit" value="Send" />
</form> */