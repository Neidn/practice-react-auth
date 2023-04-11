import {NavLink, Form, useRouteLoaderData} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const navItems = [
  {path: '/', label: 'Home'},
  {path: '/events', label: 'Events'},
  {path: '/newsletter', label: 'Newsletter'},
  {path: '/auth?mode=login', label: 'Authentication', token: true},
];

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            {navItems.map((item) => {
              if (item.token && token !== null) {
                return;
              }
              return (
                  <li key={item.path}>
                    <NavLink
                        to={item.path}
                        className={({isActive}) => isActive ? classes.active
                            : ''}
                    >
                      {item.label}
                    </NavLink>
                  </li>
              );
            })}
            {token &&
                <li>
                  <Form action={'/logout'} method={'post'}>
                    <button>Log out</button>
                  </Form>
                </li>
            }
          </ul>
        </nav>
        <NewsletterSignup/>
      </header>
  );
}

export default MainNavigation;
