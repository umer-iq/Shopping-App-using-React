import React from 'react';
import Header from '..//componenets/header/index';
import Footer from '..//componenets/Footer/index';

const HomepageLayout = props => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
    {/* <Footer />   */}
    </div>
  );
};

export default HomepageLayout;
