import React from 'react';
import ReactDOM from 'react-dom/client';
import PropertiesList from './components/PropertiesList';
import Footer from './components/Footer'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Property from './components/Property'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header></header>
          
        </div>
        <Routes>
          <Route exact path="/:id" element={<Property/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  changePage(currentPage) {
    this.setState({ page: currentPage })
  }

  render() {
    return(
        <div>
          <h1>Easy Broker</h1>
          <PropertiesList page={this.state.page}></PropertiesList>
          <Footer className='footer' page={this.state.page} onChange={(page) => this.changePage(page)}></Footer>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App></App>
);
