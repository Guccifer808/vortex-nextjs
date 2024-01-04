'use client';

import { linksArray } from '@/constants/navLinks';
import styles from './links.module.css';
import NavLink from './nav-link/NavLink';
import { useState } from 'react';

const Links = () => {
  const [open, setOpen] = useState<boolean>(false);

  const isLoggedIn: boolean = true;
  const isAdmin: boolean = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {linksArray.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {isLoggedIn ? (
          <>
            {isAdmin && <NavLink link={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobLinks}>
          {linksArray.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
