import './style.scss';

import React from 'react';
import SectionMenu from '../SectionMenu';
import Portfolio from '../Portfolio';

const UserDetails = () => {
  const titles = ['Portfolio', 'CV'];


  return (
    <section className="UserDetails">
      <SectionMenu titles={titles} />
      <Portfolio />
    </section>
    
  );
};

export default UserDetails;
