import { useContext } from 'react';
import RenderedNews from '../../DataFile/RenderedNews';
import HeadlineClasses from "./Headline.module.css";
import { NewsDataContext } from '../../Starter/StarterFile';
import { FaExclamationTriangle } from 'react-icons/fa';
import Error from '../../Error/ErrorPage.module.css';

const HeadlineNews = () => {

  const { signUp, formReference, error, fetchedData } = useContext(NewsDataContext);

  return (
    <>
      <h3 className={HeadlineClasses.heading}>Top Headline</h3>
 {error && <ErrorMessage message={error} />}
      <main className={HeadlineClasses.headlineUl}>
       
        {!signUp ? (
      
          !error &&
          fetchedData.slice(0, 4).map((news, id) => (
            <RenderedNews news={news} key={id} />
          ))
        ) : (
        
          !error &&
          fetchedData.map((news, id) => (
            <RenderedNews news={news} key={id} />
          ))
        )}

       
      </main>

      <div className={HeadlineClasses.seeMoreDiv}>
        {!signUp && (
          <button className={HeadlineClasses.seeMore} onClick={formReference}>Register to see more</button>
        )}
      </div>
    </>
  );
};

export default HeadlineNews;



function ErrorMessage({error }) {
  return (
    <>
      <div className={Error.errorPage}>
      <FaExclamationTriangle className={Error.errorIcon} />
      <h1>Oops! Something went wrong.</h1>
      <p>{error}</p>
      </div>
    </>
  )
}