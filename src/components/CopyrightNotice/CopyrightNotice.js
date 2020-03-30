import React from 'react';

const CopyrightNotice = () => {
  let year = new Date().getFullYear();

  return (
    <p className='copyrightNotice'>
      &copy;{year} Tom Griffiths. All rights reserved.
    </p>
  );
};

export default CopyrightNotice;
