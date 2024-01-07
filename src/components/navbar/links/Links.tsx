'use client';

import { linksArray } from '@/constants/navLinks';
import styles from './links.module.css';
import NavLink from './nav-link/NavLink';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import menuAnimatedOpen from '/public/static/menu.svg';
import menuAnimatedClose from '/public/static/menu-close.svg';
import useLockBodyScroll from '@/app/hooks/useBodyLockScroll';

const Links = () => {
  const [open, setOpen] = useState<boolean>(false);
  useLockBodyScroll(open);

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

      {open ? (
        <Image
          src={menuAnimatedClose}
          width={35}
          height={35}
          alt='menu button closed'
          onClick={() => setOpen((prev) => !prev)}
          className={styles.menuBtn}
        />
      ) : (
        <Image
          src={menuAnimatedOpen}
          width={35}
          height={35}
          alt='menu button closed'
          onClick={() => setOpen((prev) => !prev)}
          className={styles.menuBtn}
        />
      )}

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
