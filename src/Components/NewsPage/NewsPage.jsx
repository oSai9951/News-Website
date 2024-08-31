import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NewsDataContext } from '../Starter/StarterFile'
import RenderedNews from '../DataFile/RenderedNews'
import HeadlineClasses from "../Home/Headline/Headline.module.css"
import NewsPageClasses from "./NewsPage.module.css"
import Search from '../Search/Search'


import Error from '../Error/ErrorPage.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';


const NewsPage = () => {
  const { setCategory, error, search, searchedNews } = useContext(NewsDataContext)
  const { fetchedData } = useContext(NewsDataContext);
 

  
  const handleCategoryChange = (category) => {
    setCategory(category)
  }

  return (
    <>
      <nav className={NewsPageClasses.navigation}>
      
        <ul className={NewsPageClasses.linkTag}>
          <Link to="/world"><li onClick={() => handleCategoryChange("world")}>world</li></Link>
          <Link to="/nation"><li onClick={() => handleCategoryChange("nation")}>nation</li></Link>
          <Link to="/business"><li onClick={() => handleCategoryChange("business")}>business</li></Link>
          <Link to="/technology"><li onClick={() => handleCategoryChange("technology")}>technology</li></Link>
          <Link to="/entertainment"><li onClick={() => handleCategoryChange("entertainment")}>entertainment</li></Link>
          <Link to="/sports"><li onClick={() => handleCategoryChange("sports")}>sports</li></Link>
          <Link to="/science"><li onClick={() => handleCategoryChange("science")}>science</li></Link>
          <Link to="/health"><li onClick={() => handleCategoryChange("health")}>health</li></Link>
        </ul>
      </nav>

      <Search/>
        {error && <ErrorMessage message={error} />}
      <main className={HeadlineClasses.headlineUl}>

  { !error && search.length === 0 && fetchedData.map((news, id) => (
    <RenderedNews news={news} key={id} />
  ))}
  { !error && search.length > 0 && searchedNews.length > 0 && searchedNews.map((news, id) => (
    <RenderedNews news={news} key={id} />
  ))}
  { search.length > 0 && searchedNews.length === 0 && (
    <p>No results found for "{search}".</p>
  )}

</main>

    </>
  )
}

export default NewsPage





function ErrorMessage({ message }) {
  return (
    <>
      <div className={Error.errorPage}>
      <FaExclamationTriangle className={Error.errorIcon} />
      <h1>Oops! Something went wrong.</h1>
      <p>{message}</p>
      </div>
    </>
  )
}