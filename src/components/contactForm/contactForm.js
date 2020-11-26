import React, { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import oil from '../../assets/images/oil.webp'
import './contactForm.css'
import { css } from '@emotion/react'
import SyncLoader from 'react-spinners/SyncLoader'
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`
function ContactForm() {
    const [formsent, sendForm] = useState(true)

    const sendform = () => {
        console.log('sending form')
    }

    return (
        <div style={{ backgroundImage: `url(${oil})` }} className="contactForm">
            <div className="heading">
                <h2>Please use this form if you wish to contact me</h2>
                <h4>Alternatively, Send an Email to: Dufferz@dufferz.net</h4>
            </div>
            <div className="formContent">
                <form>
                    <label>
                        Contact Name
                        <input type="text" name="contactName"></input>
                    </label>
                    <label>
                        Contact Email
                        <input type="text" name="email"></input>
                    </label>
                    <textarea className="textBox" rows="10"></textarea>
                    <button
                        className="buttons"
                        onClick={() => {
                            sendform()
                        }}
                    >
                        Send
                    </button>
                    <SyncLoader
                        css={override}
                        size={5}
                        color={'#00ff00'}
                        loading={true}
                    />
                </form>
            </div>
        </div>
    )
}

export default ContactForm
