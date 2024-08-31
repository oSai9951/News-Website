import React from 'react'
import World from "../../../assets/world.jpg"
import Tech from "../../../assets/technology.jpg"
import Health from "../../../assets/health.jpg"
import Business from "../../../assets/business.jpg"
import CategoryClass from "./Categories.module.css"
import { Link } from 'react-router-dom'


const Categories = () => {


    const arr = [
        {
            id: 1,
            img: World,
            heading: "Global news",
            para: "World News delivers comprehensive coverage of global events and issues, providing you with the latest updates on international politics, conflicts, and diplomacy.",
            link: "/world"
        },
        {
            id: 2,
            img: Tech,
            heading: "Technology news",
            para: "From AI breakthroughs to the latest in gadgets and software, stay updated on the trends and tech that are transforming industries and daily life.",
        link: "/technology"
        },
        {
            id: 3,
            img: Business,
            heading: "Business news",
            para: "Stay ahead with real-time insights into economic trends, industry shifts, and key business decisions impacting the global economy.",
        link: "/business"
        },
        {
            id: 4,
            img: Health,
            heading: "Health news",
            para: "Stay informed on breakthroughs in healthcare, fitness tips, and advice to help you lead a healthier life.",
      link: "/health"
        }
    ]

    return (
        <section style={{paddingTop: "50px", paddingBottom: "50px"}}>
            <div className={CategoryClass.upperDiv}></div>

            <main className={CategoryClass.mainContent}>
                {arr.map((item) => (
                    <div key={item.id} className={CategoryClass.categoryDiv}>
                        <img src={item.img} alt={item.heading} className={CategoryClass.categoryImg}/>
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                       <Link to={item.link}> <button>Read More</button></Link>
                    </div>
                ))}
            </main>

            <div className={CategoryClass.lowerDiv}></div>
        </section>
    )
}

export default Categories
