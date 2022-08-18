import React from "react"


const ContactForm = () => {

        return (
            <form id="contact" action="" method="post">
                <h3>Deje su mensaje</h3>
                <h4>Contáctese con nosotros</h4>
                <fieldset>
                    <input placeholder="Nombre" type="text" required/>
                </fieldset>

                <fieldset>
                    <input placeholder="Número de teléfono" type="tel"  required/>
                </fieldset>

                <fieldset>
                    <input placeholder="Email" type="email" required/>
                </fieldset>
            
                <fieldset>
                    <textarea placeholder="Escriba su mensaje aquí...." required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
                </fieldset>
            </form>
        )
    }


export { ContactForm }
