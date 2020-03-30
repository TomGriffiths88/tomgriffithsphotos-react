import React, { Component } from 'react';
import gsap from 'gsap';

import GalleryImage from '../GalleryImage/GalleryImage';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.images = [];
  }

  state = {
    counter: 0,
    images: null
  };

  navClickHandler = dir => {
    const { counter } = this.state;
    if (dir === 'next') {
      this.setState({ counter: counter + 1 });
    } else if (dir === 'prev') {
      this.setState({ counter: counter - 1 });
    }
  };

  fadeIn = node => {
    gsap.from(node, {
      delay: 1,
      duration: 1,
      opacity: 0
    });
  };

  componentDidMount = () => {
    this.fadeIn('.controls');
  };

  render() {
    const images = this.props.images;
    const counter = this.state.counter;

    let galleryImage;

    if (images) {
      galleryImage = <GalleryImage url={images[counter]} counter={counter} />;
    }

    let prevDisabled = this.state.counter === 0;
    let nextDisabled =
      this.state.counter === images.length - 1 || images.length < 1;

    return (
      <div className='gallery'>
        <div className='viewer' ref={el => (this.viewerElement = el)}>
          <div className='overlay'></div>
          {galleryImage}
        </div>

        <div className='controls'>
          <button
            className='prev'
            disabled={prevDisabled}
            onClick={() => this.navClickHandler('prev')}
          >
            Prev
          </button>
          <button
            className='next'
            disabled={nextDisabled}
            onClick={() => this.navClickHandler('next')}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
