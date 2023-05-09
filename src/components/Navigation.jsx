import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

function Navigation() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.leftNavbar}>
        <h1 className={styles.navbarTitle}>Bookstore CMS</h1>
        <ul className={styles.navbarLinks}>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navbarPhoto}>
        <FaUserAlt className={styles.logo} />
      </div>
    </nav>
  );
}

export default Navigation;
