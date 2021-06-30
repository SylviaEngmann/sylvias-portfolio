import React, {useState} from 'react';
import '../App.css';

const ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const email = "sylvia.engmann8@gmail.com"

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
        //props.submitCb(formData);
        setFormData(ContactFormData);
      }

        return(
            <div>
                <form onSubmit={handleSubmit}>                      
                        <input 
                            type="text"
                            name="clientname"
                            placeholder="Your name"
                            value={formData.name}
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
                        <button type="submit" className ="sub btn">Send Message</button>
                  </div>
               </form>
            </div>
        )
    }

export default ContactForm;
