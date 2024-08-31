import HeadlineClasses from "../Home/Headline/Headline.module.css"
import React from "react";
const RenderedNews = ({news, id}) => {
  console.log("Rendered News")
    const {image, title, description, source, url} = news;

  return (
    <>   
        <div className={HeadlineClasses.newsItem} key={id}>
                        <img src={image} alt={title} className={HeadlineClasses.image}/>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className={HeadlineClasses.sourceInfo}>
                            <p>Published By: <span>{source.name}</span></p>
                            <p><a href={url} rel="noopener noreferrer" target="_blank"><button>Read more</button></a></p>
                        </div>
                    </div>
                  
                    </>
  )
}

export default RenderedNews