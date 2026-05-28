import { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Modal from "../components/Modal/Modal";

function ContactPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div style={{padding: '20px', marginTop: '40px'}}>
                <ContactForm onSuccess={() => setIsModalOpen(true)} />
           
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Success! 🚀</h2>
                <p>Thank you for reaching out. I will get back to you soon!</p>
            </Modal>
        </div>
    );
}

export default ContactPage;