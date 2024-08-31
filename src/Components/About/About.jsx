
import {memo} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './About.module.css'; 

const About = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); 
    };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About This News-Website</h1>
      <p className={styles.paragraph}>I have created this front-end website with the knowledge of React, css and javascript.</p>
      <p className={styles.paragraph}>Here are some tools and libraries used in this project:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h2 className={styles.subheading}>React:</h2>
          <p className={styles.paragraph}>
            Popular front-end library of JavaScript. I used <span className={styles.textMedium}>React Hooks</span> for creating components for this project.
          </p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.subheading}>module.css file:</h2>
          <p className={styles.paragraph}>Styles defined in a CSS module are scoped to the component they are imported into, preventing them from affecting other components unintentionally.</p>
        </li>
     
        <li className={styles.listItem}>
          <h2 className={styles.subheading}>React Router:</h2>
          <p className={styles.paragraph}>Popular Library for Handling different Routes for React.</p>
        </li>
      </ul>
      <div className={styles.paragraph}>
        <h3 className={styles.subheading}>API for building this project:</h3>
        <p className={styles.paragraph}>
          <a
            href="https://gnews.io/docs/v4#introduction"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
           https://gnews.io/docs/v4#introduction
          </a>
        </p>
      </div>
      <div className={styles.buttonContainer}>
      
          <button className={styles.button} onClick={handleGoBack}>Go Back</button>
        
        <Link to="/">
          <button className={styles.button}>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default memo(About);
