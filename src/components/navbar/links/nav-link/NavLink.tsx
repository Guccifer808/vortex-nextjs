'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import { LinkType } from '@/types/linkTypes';
import { usePathname } from 'next/navigation';

type Props = {
  link: LinkType;
};

const NavLink = ({ link }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${path === link.path && styles.active}`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
