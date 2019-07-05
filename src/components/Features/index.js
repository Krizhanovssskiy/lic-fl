import './style.scss';

import React from 'react';
import SectionMenu from '../SectionMenu';
import CardsList from '../CardsList';

const Features = () => {
  const titles = ['Services', 'Shop', 'Auction'];

  return (
    <section className="Features">
      <SectionMenu titles={titles} />
      <CardsList />
    </section>
  );
};

export default Features;
