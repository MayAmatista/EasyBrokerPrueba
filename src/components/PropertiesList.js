import React from 'react';
import './properties.css';
import { Property } from './Property';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
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
      <PropertiesListItem key={property.public_id} value={property}> </PropertiesListItem>
    ))
    return (
      <div className='properties-list' >
         {propertiesElements}
      </div>
    );
  }
}
class PropertiesListItem extends React.Component {

  redirect(){

    <Property id= {this.props.value.public_id}></Property>
  }
  render() {
      const altText = `Imagen de ${this.props.value.title}`;
  
      return (
          <article onClick={() => this.redirect()} className = 'property-main'>
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
