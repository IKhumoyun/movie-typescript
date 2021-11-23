import React, { FC } from 'react';

import HeaderLink from './header-link';

import { headerItems } from './header-items';
import classes from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={classes.header}>
      {headerItems.map(item => (
        <HeaderLink path={item.path} title={item.title} />
      ))}
    </div>
  );
};

export default Header;
