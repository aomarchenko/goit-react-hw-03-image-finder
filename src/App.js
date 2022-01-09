import './App.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
// import Modal from './components/Modal/Modal';

import React, { Component } from 'react';

// import shortid from 'shortid';

class ImageFinder extends Component {
  state = {
    name: '',
    showModal: false,
    gallery: null,
  };
  // toggleModal = () => {
  //   this.setState(state => ({ showModal: !this.state.showModal }));
  // };
  searchbarSubmit = name => {
    this.setState({ name });
  };

  galleryFetch = gallery => {
    console.log(gallery);
    this.setState({ gallery: gallery });
  };

  render() {
    console.log(this.state.gallery);

    return (
      <>
        <Searchbar onSubmit={this.searchbarSubmit} />
        <ImageGallery
          name={this.state.name}
          onFetch={this.galleryFetch}
          gallery={this.state.gallery}
        />
        {this.state.showModal && <Modal hits={this.state.gallery.hits}></Modal>}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default ImageFinder;
