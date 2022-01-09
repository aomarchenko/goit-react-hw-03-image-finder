import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('Esc');
      }
    });
  }

  render() {
    const array = this.props.hits;
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <h1>Привет это модалка</h1>
          <img src={array[0].largeImageURL} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
