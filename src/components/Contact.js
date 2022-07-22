import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contact = () => {
    const [succesMessage, setSuccesMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_c4ZEWxFVZf5RrVga8PTnX";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccesMessage("Email bol úspešne poslaný. Ozvem sa hneď ako to bude možné.");
          }).catch(err => console.error(`Niečo sa pokazilo ${err}`));
      }
    

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Kontakt</h1>
                <p>Prosím, pošlite mi email a ja sa ozvem hneď, ako to bude možné.</p>
                <span className="succes-message">{succesMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Meno"
                        name="name"
                        ref = {
                            register({
                                required: "Prosím, vložte vaše meno",
                                maxLength: {
                                    value: 30,
                                    message: "Prosím, použite max 30 znakov"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Telefónne číslo"
                        name="phone"
                        ref = {
                            register({
                                required: "Prosím, vložte vaše telefónne číslo",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-center">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Emailová adresa"
                        name="email"
                        ref = {
                            register({
                                required: "Prosím, vložte váš email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9._%-]+\.[A-Z]{2,}$/i,
                                    message: "Neplatný email"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Predmet"
                        name="subject"
                        ref = {
                            register({
                                required: "HUPS, zabudli ste na predmet",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-cs-12">
                    <div className="text-center">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Tu môžete písať..."
                            name="description"
                            ref = {
                                register({
                                    required: "Prosím, popíšte vašu žiadosť... ",
                                })
                            }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">Odoslať</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
