import { Component } from 'react';

export default class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      fetch(
        `https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=${this.props.name}&image_type=photo`,
      )
        .then(res => res.json())
        .then(console.log);
    }
  }

  render() {
    return (
      <ul>
        <p>{this.props.name}</p>
      </ul>
    );
  }
}
