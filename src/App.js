import './App.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

import React, { Component } from 'react';

// import shortid from 'shortid';

class ImageFinder extends Component {
  state = {
    name: '',
  };

  searchbarSubmit = name => {
    this.setState({ name });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchbarSubmit} />
        <ImageGallery name={this.state.name} />

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default ImageFinder;
