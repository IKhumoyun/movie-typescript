import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './card.module.scss';

interface Props {
  path: string;
  imagePath: string;
  title: string;
}

const Card: FC<Props> = ({ path, imagePath, title }) => {
  return (
    <Link to={path} className={classes.card}>
      <img src={imagePath} alt={title} className={classes.cardImage} />
      <h3 className={classes.cardTitle}>{title}</h3>
    </Link>
  );
};

export default Card;
