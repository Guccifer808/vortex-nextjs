'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import { LinkType } from '@/types/linkTypes';
import { usePathname } from 'next/navigation';

type Props = {
  link: LinkType;
  closeMenu: () => void;
};

const NavLink = ({ link, closeMenu }: Props) => {
  const path = usePathname();
  const handleClick = () => {
    closeMenu(); //
  };
  return (
    <Link
      href={link.path}
      className={`${styles.container} ${path === link.path && styles.active}`}
      onClick={handleClick}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
