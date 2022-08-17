import React from 'react';
import './properties.css';

class PropertiesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    this.getProperties();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page){
      this.getProperties();
    }
  }

  getProperties() {
    const url = `http://localhost:3000/properties?page=${this.props.page}` 

    fetch(url)
      .then(response => response.json())
      .then(properties => this.setState({ properties }))
      .catch(err => console.log(err));
  }

  render() {
    const propertiesElements = this.state.properties.map(property => (
      <PropertyMain key={property.public_id} value={property}> </PropertyMain>
    ))
    return (
      <div className='properties-list' >
         {propertiesElements}
      </div>
    );

  }
}

class PropertyMain extends React.Component {

  render() {
      const altText = `Imagen de ${this.props.value.title}`;
  
      return (
          <article className = 'property-main'>
              <h2>{this.props.value.title} </h2>
              <img src={this.props.value.title_image_thumb} alt={altText} />
              <h3>Ubicación: <br/>
               {this.props.value.location} {this.props.value.property_type} </h3>
              <h4> Propiedad: {this.props.value.public_id} </h4>
          </article>
          );
      }
  }

export default PropertiesList 
