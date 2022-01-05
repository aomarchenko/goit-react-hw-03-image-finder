import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
export default class ImageGallery extends Component {
  state = {
    galery: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name || prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=${this.props.name}&image_type=photo&per_page=12&page=${this.state.page}`,
      )
        .then(res => res.json())
        .then(galery => this.setState({ galery }));
    }
    console.log(this.state.galery);
    if (this.state.galery) {
      console.log(this.state.galery.hits);
    }
  }
  nextPage = () => {
    // this.setState({ page } + 1);

    // const qwe = this.state.page;
    console.log(this.state.page);
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
  };
  // increaseScore() {
  //   this.setState({ score: this.state.score + 1 });
  // }
  render() {
    return (
      <>
        {this.state.galery && (
          <ul>
            <ImageGalleryItem hits={this.state.galery.hits} />
          </ul>
        )}
        <button type="button" onClick={this.nextPage}>
          Load more
        </button>
      </>
    );
  }
}
