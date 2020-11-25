import React, { useState } from 'react'
import './contactForm.css'

function ContactForm() {
    const [] = useState(() => {})
    return (
        <div className="contactForm">
            Contact Page!
            <label>
                Contact Name
                <input type="text" name="contactName"></input>
            </label>
            <label>
                Contact Email
                <input type="text" name="email"></input>
            </label>
            <textarea rows="10"></textarea>
        </div>
    )
}

export default ContactForm
