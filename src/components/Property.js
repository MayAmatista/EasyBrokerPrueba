import React from "react";
import { useParams } from "react-router-dom";
import {ContanctForm} from "./ContactForm"
import './property.css'

function withParams(Property) {
    return props => <Property {...props} params={useParams()}/>
}
class Property extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          property: {},
        }
    }

  componentDidMount() {
        const url = `http://localhost:3000/property/${this.props.params.id}`

        fetch(url)
            .then(response => response.json())
            .then(property => this.setState({ property }))
            .catch(err => console.log(err));
    }

    render(){

        return(
            <div>
                <h2>ID de la publicación: {this.state.property.public_id}</h2>
                <h2>{this.state.property.title}</h2> <br></br>
                <h4>Descripción: {this.state.property.description}</h4>
                <ContanctForm></ContanctForm>
            </div>
        )
    }
}

export default withParams(Property);
