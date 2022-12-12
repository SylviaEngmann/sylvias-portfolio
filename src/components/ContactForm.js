import React, {useState} from 'react';
import {send} from 'emailjs-com';
import{ init } from 'emailjs-com';
import '../App.css';


const ContactFormData = {
    from_name: "",
    to_name: "Sylvia",
    email: "",
    subject: "",
    message: "",
};

init(process.env.USER_ID)


function ContactForm() {
    const [formData, setFormData] = useState(ContactFormData);


    const handleChange = (event) => {
        const { name, value } = event.target;

        let newFormData = {...formData};  
        newFormData[name] = value;  
        setFormData(data => newFormData);  
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            formData,
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED', err);
        });
        setFormData(ContactFormData);
      }
        return(
            <div>
                <form onSubmit={handleSubmit}>                     
                        <input 
                            type="text"
                            name="from_name"
                            placeholder="Your name"
                            value={formData.from_name}
                            onChange={handleChange}
                        /> 
                        <input 
                            type="text"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange} 
                        />
                        <input 
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange} 
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        >

                        </textarea>
                  <div className="btn-div">
                        <button type="submit" className ="submitButton">Send Message</button>
                  </div>
               </form>
            </div>
        )
    }

export default ContactForm;
