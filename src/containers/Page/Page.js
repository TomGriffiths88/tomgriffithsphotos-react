import React, { Component } from 'react';
import axios from 'axios';

import Navigation from '../../components/Navigation/Navigation';
import PreLoader from '../../ui/PreLoader/PreLoader';
import { pages as pagesRoute } from '../../api/apiRoutes';

import gsap from 'gsap';

class Page extends Component {
  state = {
    pageData: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    const path = this.props.match.path;
    path
      .split('')
      .splice(0, 1)
      .join('');
    this.fecthData(path);
  }

  fecthData = path => {
    axios
      .get(pagesRoute + `?slug=${path}`)
      .then(res => this.setState({ pageData: res.data[0], loading: false }));
  };

  fadeInUp = (node, duration, delay) => {
    gsap.from(node, {
      duration: duration,
      delay: delay,
      y: 30,
      opacity: 0,
      ease: 'power3.inOut'
    });
  };

  componentDidUpdate = () => {
    if (this.state.pageData) {
      this.fadeInUp('.container', 1, 0.3);
    }
  };

  render() {
    const data = this.state.pageData;

    let page = <PreLoader />;

    if (this.state.pageData) {
      page = (
        <div className='container'>
          <h1 className='title'>{data.title.rendered}</h1>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          ></div>
        </div>
      );
    }

    return (
      <main className='page'>
        <Navigation {...this.props} />
        {page}
      </main>
    );
  }
}

export default Page;
