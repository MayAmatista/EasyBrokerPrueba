import React from 'react';
import ReactDOM from 'react-dom/client';
import PropertiesList from './components/PropertiesList';
import Pagination from './components/Pagination'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Property from './components/Property'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <title>EASY BROKER</title>
          </header>
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
        <div className='home'>
          <h1>EASY BROKER</h1>
          <PropertiesList page={this.state.page}></PropertiesList>
          <Pagination page={this.state.page} onChange={(page) => this.changePage(page)}></Pagination>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
