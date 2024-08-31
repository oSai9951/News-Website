import {memo} from 'react'
import Classes from "./Footer.module.css"
import { Link } from 'react-router-dom'

const Footer = () => {


  return (
   <>
    <footer className={Classes.footer}>
    <h2>News Crunch</h2>

    <ul>
        <Link to="/"><li>Home</li></Link>
   
        <Link to="/about"> <li>About</li></Link>
    </ul>
    <p>&copy; 2024 News Crunch. All rights reserved.</p>

</footer>
   </>
  )
}

export default memo(Footer)