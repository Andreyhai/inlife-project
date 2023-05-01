import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';

const ErrorPage = () => {
  return (
    <div>
      ErrorPage
      <Link to={HOME_ROUTE}>
        домой
      </Link>
    </div>
  );
};

export default ErrorPage;