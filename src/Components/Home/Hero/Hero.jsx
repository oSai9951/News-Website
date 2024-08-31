import React, { useContext } from 'react'
import Classes from "./Hero.module.css"
import Image from "../../../assets/newspaper.jpg"
import { Link } from 'react-router-dom'
import { NewsDataContext } from '../../Starter/StarterFile'

const Hero = () => {

  const { signUp, formReference } = useContext(NewsDataContext)



  return (
    <><section style={{ paddingTop: "50px" }}>
      <div className={Classes.firstDiv}>
        <img src={Image} className={Classes.heroImage} />

        <div className={Classes.headerDiv}>
          <h2 className={Classes.heading}>Stay Updated with the Latest Headline, technology, business, sports etc...</h2>
          {signUp ? <Link to="/world"><button className={Classes.service}>Check News</button></Link> : <button className={Classes.service} onClick={formReference}>Sign Up</button>}
        </div>
      </div>
    </section></>
  )
}

export default Hero