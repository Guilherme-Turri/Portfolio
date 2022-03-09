import React from 'react';
import styles from '../../Components/styles.module.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [color, setColor] = React.useState(true);

  const handleColor = () => {
    if (
      (window.scrollY > 580 && window.scrollY < 2034) ||
      (window.scrollY > 2770 && window.scrollY < 3347)
    ) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleColor);
  });

  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link
            className={color ? styles.linkColor : styles.headerList}
            to="home"
            spy={true}
            smooth={true}
            offset={2}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={color ? styles.linkColor : styles.headerList}
            to="about"
            spy={true}
            smooth={true}
            offset={2}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={color ? styles.linkColor : styles.headerList}
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={color ? styles.linkColor : styles.headerList}
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className={color ? styles.linkColor : styles.headerList}
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Let's Connect
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
