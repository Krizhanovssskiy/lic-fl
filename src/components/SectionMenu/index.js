import './style.scss';

import React, { Component } from 'react';

class SectionMenu extends Component {
  renderTitles = () => {
    const { titles } = this.props;
    const clazz = `SectionMenu__title-box--${
      titles.length
    } SectionMenu__title-box SectionMenu__title-box--active`;
    return titles.map(title => (
      <div key={title} className={clazz}>
        <h3 className="SectionMenu__title">{title}</h3>
      </div>
    ));
  };

  render() {
    return (
      <div className="SectionMenu__title-container">{this.renderTitles()}</div>
    );
  }
}

export default SectionMenu;
