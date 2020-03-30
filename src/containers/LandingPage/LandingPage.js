import React, { Component } from 'react';
import gsap from 'gsap';
import axios from 'axios';

import { pages as pagesRoute } from '../../api/apiRoutes';
import PreLoader from '../../ui/PreLoader/PreLoader';

class LandingPage extends Component {
  state = {
    loading: false,
    data: null
  };

  fetchData = () => {
    axios
      .get(pagesRoute + '?slug=home')
      .then(res => this.setState({ data: res.data[0] }))
      .then(() => console.log(this.state.data));
  };

  linkClicked = path => {
    this.props.history.push(`/${path}`);
  };

  fadein = (node, delay, duration) => {
    gsap.from(node, {
      delay: delay,
      opacity: 0,
      duration: duration,
      ease: 'power3.inOut'
    });
  };

  fadeinUp = (node, delay, duration) => {
    gsap.from(node, {
      delay: delay,
      opacity: 0,
      duration: duration,
      y: 10,
      ease: 'power3.inOut'
    });
  };

  handleLoad = () => {
    this.setState({ loading: false });
    this.fadein('.LandingPage .background', 0.2, 2);
    this.fadein('.LandingPage .container h1', 1, 3);
    this.fadeinUp('.LandingPage .container ul', 1.5, 2);
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    this.fetchData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.data !== this.state.data) {
      const img = new Image();
      img.src = this.state.data.acf.background_image;
      img.onload = this.handleLoad;
    }
  };

  render() {
    let landingPage = null;

    if (this.state.data) {
      landingPage = (
        <div className='LandingPage'>
          <div className='background'>
            <img src={this.state.data.acf.background_image} alt='background' />
          </div>
          <div className='container'>
            <h1>Tom Griffiths</h1>
            <ul>
              <li onClick={() => this.linkClicked('portfolio/places')}>
                places
              </li>
              <li onClick={() => this.linkClicked('portfolio/people')}>
                people
              </li>
              <li onClick={() => this.linkClicked('info')}>Info</li>
              <li onClick={() => this.linkClicked('contact')}>Contact</li>
            </ul>
          </div>
        </div>
      );
    }

    return this.state.loading ? <PreLoader /> : landingPage;
  }
}

export default LandingPage;
