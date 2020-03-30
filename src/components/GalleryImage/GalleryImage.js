import React, { Component } from 'react';
import PreLoader from '../../ui/PreLoader/PreLoader';
import gsap from 'gsap';

class GalleryImage extends Component {
  state = {
    loaded: false
  };

  revealImage = image => {
    gsap.to('.gallery .viewer .overlay', {
      duration: 0,
      width: '100%',
      ease: 'power3.inOut'
    });
    gsap.to('.gallery .viewer .overlay', {
      duration: 0.4,
      width: '0%',
      ease: 'power3.inOut'
    });
    gsap.from(image, {
      duration: 0.5,
      scale: 1.2,
      ease: 'power3.inOut'
    });
  };

  handleLoad = () => {
    this.setState({ loaded: true });
    this.revealImage(this.image);
  };

  componentDidMount = () => {
    this.setState({ loaded: false });
    const img = new Image();
    img.src = this.props.url;
    img.onload = this.handleLoad;
  };

  componentDidUpdate = prevProps => {
    if (prevProps.url !== this.props.url) {
      this.setState({ loaded: false });
      const img = new Image();
      img.src = this.props.url;
      img.onload = this.handleLoad;
    }
  };

  render() {
    if (this.state.loaded) {
      return (
        <img
          ref={el => (this.image = el)}
          src={this.props.url}
          className={`img${this.props.counter}`}
          alt=''
        />
      );
    } else {
      return <PreLoader />;
    }
  }
}

export default GalleryImage;
