import React, { useState, useContext, memo } from 'react';
import headerClasses from "./Header.module.css";
import { NewsDataContext } from '../../Starter/StarterFile';
import { ImProfile } from "react-icons/im";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { signUp, user, formReference, setCategory } = useContext(NewsDataContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const Profile = [
    { label: "First Name", value: user.firstName },
    { label: "Last Name", value: user.lastName },
    { label: "Email", value: user.email }
  ];

  return (
    <nav className={headerClasses.navigation}>
      <NavLink to="/" className={({ isActive }) => (isActive ? headerClasses.customLink : headerClasses.normalLink)}>
        <h1 className={headerClasses.heading}>News Crunch</h1>
      </NavLink>
      <ul className={headerClasses.unorderedList}>
        <NavLink to="/" >
          <li>Home</li>
        </NavLink>
        {!signUp ? (
          <li onClick={formReference}>News</li>
        ) : (
          <NavLink to="/world">
            <li onClick={() => setCategory('/world')}>News</li>
          </NavLink>
        )}
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        {signUp ? (
          <li
            className={headerClasses.twoPara}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImProfile size="50px" />
            {isHovered && (
              <div className={headerClasses.modal}>
                {Profile.map((item, index) => (
                  <div key={index} className={headerClasses.profile}>
                    <p className={headerClasses.label}>{item.label}:</p>
                    <p className={headerClasses.value}>{item.value}</p>
                  </div>
                ))}
              </div>
            )}
          </li>
        ) : (
          <li onClick={formReference}>Register</li>
        )}
      </ul>
    </nav>
  );
};

export default memo(Header);
