import React from "react";
import { useParams } from "react-router-dom";
import { ContactForm } from "./ContactForm"
import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";

import './property.css'

function withParams(Property) {
    return props => <Property {...props} params={useParams()}/>
}
class Property extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          property: null,
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
        return this.state.property !== null ?
        (
            <div className = 'property'>
                <Link to= '/'> Volver </Link>
                <h2>ID de la publicación: {this.state.property.public_id}</h2>
                <ImageSlider className='image-slider' images= {this.state.property.property_images}></ImageSlider>
                <h2>{this.state.property.title}</h2> <br></br>
                <h4>Descripción: {this.state.property.description}</h4>
                <ContactForm propertyId = {this.state.property.public_id}></ContactForm>
            </div>
        ) : (<div>Cargando...</div>)
    }
}

export default withParams(Property);
