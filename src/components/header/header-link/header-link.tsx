import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './header-link.module.scss';

interface Props {
  path: string;
  title: string;
}

const HeaderLink: FC<Props> = ({ path, title }) => {
  return (
    <Link to={path} className={classes.headerLink}>
      {title}
    </Link>
  );
};

export default HeaderLink;
