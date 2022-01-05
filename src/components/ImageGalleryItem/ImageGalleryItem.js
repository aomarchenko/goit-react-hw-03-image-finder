import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    const array = this.props.hits;

    return (
      <>
        {array.map(item => (
          <li key={item.id}>
            <img src={item.webformatURL} alt={this.props.name} />
          </li>
        ))}
      </>
    );
  }
}
