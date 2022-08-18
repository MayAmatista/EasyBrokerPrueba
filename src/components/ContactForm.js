import React from "react"


const ContanctForm = () => {

        return (
            <form id="contact" action="" method="post">
                <h3>Deje su mensaje</h3>
                <h4>Contáctese con nosotros</h4>
                <fieldset>
                    <input placeholder="Nombre" type="text" tabindex="1" required autofocus/>
                </fieldset>

                <fieldset>
                    <input placeholder="Número de teléfono" type="tel" tabindex="3" required/>
                </fieldset>

                <fieldset>
                    <input placeholder="Email" type="email" tabindex="2" required/>
                </fieldset>
            
                <fieldset>
                    <textarea placeholder="Escriba su mensaje aquí...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
                </fieldset>
            </form>
        )
    }


export { ContanctForm }
