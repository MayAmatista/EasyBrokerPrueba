import React from 'react';
import ReactDOM from 'react-dom/client';
import PropertiesList from './components/PropertiesList';
import Footer from './components/Footer'
import './index.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 1
    }
  }

  changePage(currentPage) {
    this.setState({ page: currentPage})
  }

  render(){
    return(
      <div>
        <header></header>
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
