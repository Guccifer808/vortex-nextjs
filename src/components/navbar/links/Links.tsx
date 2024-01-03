import styles from './links.module.css';
import NavLink from './nav-link/NavLink';
import { LinkType } from '@/types/linkTypes';

const Links = () => {
  const linksArray: LinkType[] = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];
  return (
    <div className={styles.links}>
      {linksArray.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
