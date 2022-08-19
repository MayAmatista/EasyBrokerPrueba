import React from "react"


const ContactForm = (props) => {
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const value = Object.fromEntries(data.entries());
        value.property_id = props.propertyId;

        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(() => window.alert("Formulario enviado exitosamente"))
    }

    return (
        <form id="contact" onSubmit={handleSubmit}>
            <h3>Deje su mensaje</h3>
            <h4>Contáctese con nosotros</h4>
            <fieldset>
                <input id="name" placeholder="Nombre" type="text" name="name" required />
            </fieldset>

            <fieldset>
                <input id="phone" placeholder="Número de teléfono" type="tel" name="phone" required/>
            </fieldset>

            <fieldset>
                <input id="email" placeholder="Email" type="email" name="email" required />
            </fieldset>

            <fieldset>
                <textarea id="message" placeholder="Escriba su mensaje aquí...." name="message" required></textarea>
            </fieldset>

            <fieldset>
                <input id="source" placeholder="Fuente de contacto" type="text" name="source" required />
            </fieldset>

            <fieldset>
                <button type="submit">Enviar</button>
            </fieldset>
        </form>
    )
}

export { ContactForm }
