import { useState } from "react";
import './ContactForm.css';

function ContactForm({onSuccess}) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

function handleSubmit(e) {
    e.preventDefault();
    if (userName && userEmail) {
        setIsSubmitted(true);

        if (onSuccess) onSuccess();
    }
}

return(
    <div className="react-contact-section">
        <h2 className="contact-title">Contact Me</h2>
        {isSubmitted ? (
            <div className="form-success-badge">
                <h3>Thank You, {userName}! 🎉</h3>
                <p>Your message has been received. I will reach out to you at <strong>{userEmail}</strong> soon.</p>
                <button onClick={() => { setIsSubmitted(false); setUserName(""); setUserEmail(""); }} className="reset-form-btn">Send Another Message</button>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="react-contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                    type="text" 
                    placeholder="Your Name"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input 
                    type="email" 
                    placeholder="Your Email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
        )}
    </div>
);
}

export default ContactForm;