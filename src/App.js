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
    // const newContact = {
    //   id: shortid.generate(),
    //   name,
    //   number,
    // };

    console.log(name);
    this.setState({ name });
    // fetch(
    //   'https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=yellow+flowers&image_type=photo',
    // )
    //   .than(response => response.json())
    //   .than(console.log);
  };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };
  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };
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
