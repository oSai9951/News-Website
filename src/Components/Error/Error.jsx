
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Error from './ErrorPage.module.css'; 

const ErrorPage = () => {
  return (
    <div className={Error.errorPage}>
      <FaExclamationTriangle className={Error.errorIcon} />
      <h1>Oops! Something went wrong.</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to="/" >
      <button className={Error.errorButton}> Go Back Home</button> 
      </Link>
    
    </div>
  );
};

export default ErrorPage;
