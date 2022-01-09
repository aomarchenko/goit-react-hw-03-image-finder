import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Esc');
      this.props.toggle();
    }
  };

  render() {
    const array = this.props.hits;
    const imageId = this.props.id;
    // console.log(image.imageId);
    // const image = array.filter(img => img.includes(6889575));
    const image = array.filter(img => img.id == imageId);
    console.log(image[0].largeImageURL);
    // array.filter(img => img.id.includes.e.target.id);
    return createPortal(
      <div className={styles.Overlay} onClick={this.props.toggle}>
        <div className={styles.Modal}>
          <img src={image[0].largeImageURL} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
