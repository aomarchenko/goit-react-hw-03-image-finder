import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
export default class ImageGallery extends Component {
  state = {
    galery: null,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name || prevState.page !== this.state.page) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=${this.props.name}&image_type=photo&per_page=12&page=${this.state.page}`,
      )
        .then(res => res.json())
        .then(galery => this.setState({ galery }))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevProps.name !== this.props.name) {
      this.setState({ page: 1 });
    }
  }

  nextPage = prevProps => {
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    console.log(this.state.page);

    return (
      <>
        {this.state.loading && <Loader type="Audio" color="#00BFFF" height={80} width={80} />}
        {this.state.galery && (
          <ul>
            <ImageGalleryItem hits={this.state.galery.hits} />
          </ul>
        )}
        <Button onClick={this.nextPage} />
        {/* <button type="button" onClick={this.nextPage}>
          Load more
        </button> */}
      </>
    );
  }
}
