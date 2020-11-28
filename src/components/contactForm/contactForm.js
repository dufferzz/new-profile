import React, { Component } from 'react'
import './contactForm.css'
import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`
export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formSubmitted: false,
            cantSend: false,
            successfulSubmit: false,
        }
    }

    render() {
        const ContactFormForm = () => {
            const { register, errors, handleSubmit } = useForm()

            const onSubmit = async (data) => {
                alert('NodeMailer Unavailable: Rate limit')
                // await axios post dfz api profile/contact, return success message / error
                // .then setstate successfulSubmit true on success
                // else showerror from api / nodemailer
                //cantsend = true;

                console.log(data)
                //
                this.setState({ formSubmitted: true, cantSend: true })
            }
            return (
                <div className="formContent">
                    <div className="heading">
                        <h2>Please use this form if you wish to contact me</h2>
                        <h4
                            style={{
                                marginTop: 1 + 'rem',
                                marginBottom: 1 + 'rem',
                            }}
                        >
                            Alternatively, Send an Email to: Dufferz@dufferz.net
                        </h4>
                    </div>
                    <div className="inner">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <span className="inputLabel">Contact Name</span>
                            </label>

                            <input
                                type="text"
                                name="contactName"
                                ref={register({ required: true })}
                            />
                            {errors.contactName && 'Contact Name is required'}
                            <label>
                                <span className="inputLabel">
                                    Contact Email
                                </span>
                            </label>
                            <input
                                type="text"
                                name="contactEmail"
                                ref={register({ required: true })}
                            />
                            {errors.contactEmail && 'Contact Email is required'}

                            <label>
                                <span className="inputLabel">Message</span>
                            </label>

                            <textarea
                                ref={register({ required: true })}
                                name="message"
                                rows="6"
                                className="textBox"
                            ></textarea>
                            {errors.message && 'A message is required'}

                            {this.state.formSubmitted ? (
                                <>
                                    <input type="submit" disabled />
                                    <h3
                                        className="fadeIn"
                                        style={{
                                            width: 100 + '%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {this.state.cantSend === true
                                            ? 'There has been an error'
                                            : 'Your message has been sent!'}
                                    </h3>
                                </>
                            ) : (
                                <input type="submit" />
                            )}
                        </form>
                    </div>
                </div>
            )
        }

        return <ContactFormForm />
    }
}
