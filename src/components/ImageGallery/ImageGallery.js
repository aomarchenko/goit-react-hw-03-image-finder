import { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    galery: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      fetch(
        `https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=${this.props.name}&image_type=photo&per_page=12`,
      )
        .then(res => res.json())
        .then(galery => this.setState({ galery }));
    }
    console.log(this.state.galery);
    if (this.state.galery) {
      console.log(this.state.galery.hits);
    }
  }

  render() {
    return (
      <>
        {this.state.galery && (
          <ul>
            {this.state.galery.hits.map(item => (
              <li key={item.id}>
                <img src={item.webformatURL} alt={this.props.name} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
