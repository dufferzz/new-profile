import React, { useState } from 'react'
import './contact.css'
import ContactForm from '../../components/contactForm/contactForm'
import oil from '../../assets/images/oil.webp'

export default function Contact() {
    return (
        <div style={{ backgroundImage: `url(${oil})` }} className="contactForm">
            <ContactForm />
        </div>
    )
}
