import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const navItems = [
  {path: '/', label: 'Home'},
  {path: '/events', label: 'Events'},
  {path: '/newsletter', label: 'Newsletter'},
  {path: '/auth?mode=login', label: 'Authentication'},
];

function MainNavigation() {
  return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            {navItems.map((item) => (
                <li key={item.path} className={classes.item}>
                  <NavLink
                      to={item.path}
                      className={({isActive}) => isActive ? classes.active : ''}
                  >
                    {item.label}
                  </NavLink>
                </li>
            ))}
          </ul>
        </nav>
        <NewsletterSignup/>
      </header>
  );
}

export default MainNavigation;
