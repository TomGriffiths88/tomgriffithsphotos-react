import React from 'react';
import gsap from 'gsap';

const Hamburger = props => {
  const clickHandler = () => {
    gsap.to('.portfolioPage', {
      opacity: 0,
      duration: 0.3
    });
    props.history.push('/');
  };

  const enterHandler = () => {
    gsap.to('.gallery', {
      opacity: 0.1,
      duration: 0.3
    });
    gsap.to('.first', {
      duration: 0.2,
      rotate: -45,
      y: 6,
      ease: 'power4.inOut'
    });
    gsap.to('.second', {
      duration: 0.2,
      rotate: 45,
      y: -6,
      ease: 'power4.inOut'
    });
  };

  const leaveHandler = () => {
    gsap.to('.gallery', {
      opacity: 1,
      duration: 0.3
    });
    gsap.to('.first', {
      duration: 0.2,
      rotate: 0,
      y: 0,
      ease: 'power4.inOut'
    });
    gsap.to('.second', {
      duration: 0.2,
      rotate: 0,
      y: 0,
      ease: 'power4.inOut'
    });
  };

  return (
    <div
      className='hamburger'
      onMouseOver={enterHandler}
      onMouseOut={leaveHandler}
      onClick={clickHandler}
    >
      <span className='first'></span>
      <span className='second'></span>
    </div>
  );
};

export default Hamburger;
