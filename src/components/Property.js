import React from "react";
import { ContanctForm } from "./ContactForm";

class Property extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          property: null,
        }
    }
    //use params

    getProperty() {
        const url = `https://api.stagingeb.com/v1/properties/${this.props.id}`

        fetch(url)
            .then(response => response.json())
            .then(property => this.setState({ property }))
            .catch(err => console.log(err));
    }

    render(){

        return(
            <div>
                <h2>{this.state.public_id}</h2>
                <h2>{this.state.title}</h2>
                <h4>{this.state.description}</h4>
                <h4>imagenes</h4>
                <h4>{this.state.description.property_type}</h4>
                <h4>{this.state.location}</h4>
                <ContanctForm></ContanctForm>
            </div>
        )
    }
}

export { Property }
