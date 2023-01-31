import { Component } from 'react';
import { fetchImages } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'GlobalStyles';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ModalImage } from 'components/Modal/Modal';
import { Searchbar } from '../Searchbar/Searchbar';
import { AppStyles } from './AppStyles';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    photos: [],
    selectedImage: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { page, query, photos } = this.state;
      if (prevState.page !== page || prevState.query !== query) {
        this.setState({ isLoading: true });
        const responce = await fetchImages(query, page);
        const data = responce.hits.map(
          ({ id, largeImageURL, tags, webformatURL }) => {
            return {
              id,
              largeImageURL,
              tags,
              webformatURL,
            };
          }
        );
        this.setState({
          photos: [...photos, ...data],
          isLoading: false,
        });
      }
    } catch (error) {
      toast.error('Oops! Something went wrong! Please try again.');
      this.setState({
        isLoading: false,
      });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  searchPhoto = ({ searchQuery }) => {
    const { query } = this.state;
    if (searchQuery !== query) {
      this.setState({
        photos: [],
        page: 1,
      });
    }
    this.setState({
      query: searchQuery,
      page: 1,
    });
  };

  selectImage = imgUrl => {
    this.setState({
      selectedImage: imgUrl,
    });
  };

  resetImage = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const { photos, isLoading, selectedImage } = this.state;
    return (
      <AppStyles>
        <GlobalStyle />
        <Searchbar onSubmit={this.searchPhoto} />
        {photos.length > 0 && (
          <ImageGallery photos={photos} onSelect={this.selectImage} />
        )}
        {photos.length > 11 && !isLoading && <Button onClick={this.loadMore} />}
        {isLoading && <Loader />}
        <Toaster />
        <ModalImage selectImage={selectedImage} resetImage={this.resetImage} />
      </AppStyles>
    );
  }
}
