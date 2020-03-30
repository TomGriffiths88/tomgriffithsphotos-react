import React, { Component } from 'react';
import axios from 'axios';

import { portfolios as portfolioRoute } from '../../api/apiRoutes';
import Navigation from '../../components/Navigation/Navigation';
import Gallery from '../../components/Gallery/Gallery';

class PortfolioPage extends Component {
  state = {
    images: [],
    loading: false,
    error: ''
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchImages();
  }

  fetchImages = () => {
    let data = null;
    let images = [];
    axios
      .get(portfolioRoute)
      .then(res => {
        data = res.data.filter(
          item => item.slug === this.props.match.params.slug
        );
        if (data[0].acf.portfolio !== false) {
          data[0].acf.portfolio.forEach(image => images.push(image.url));
          this.setState({ images: images, loading: false });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ error: true, loading: false }));
  };

  render() {
    let gallery = null;

    const images = this.state.images;

    if (images.length > 0) {
      gallery = <Gallery images={images} />;
    }

    if (!this.state.loading && images.length === 0) {
      gallery = <p>Sorry no images found</p>;
    }

    return (
      <div className='portfolioPage'>
        <Navigation title={this.props.match.params.slug} {...this.props} />
        {gallery}
      </div>
    );
  }
}

export default PortfolioPage;
