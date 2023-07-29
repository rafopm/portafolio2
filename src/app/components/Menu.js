'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import { AiFillHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { BsFillPersonFill, BsTools } from "react-icons/bs";
import Styles from "../Styles/Menu.module.css";
import BtnTheme from "./BtnTheme";

const Menu = () => {
  const currentRoute = usePathname("/");
  const handleClick = (event) => {
    const href = event.target.href;
    if (href === currentRoute) {
      event.preventDefault();
    }
  }

  return (
    <nav className={Styles.menu}>
      <div></div>
      <ul className={Styles.menuItems}>
        <li>
          <Link
            className={Styles.menuLink}
            href="/"
            title="Home"
            onClick={handleClick}
          >
            <span className={Styles.menuText}>Home</span>
            <AiFillHome
              style={{
                color: currentRoute === "/" && "#C9E265",
              }}
            />
          </Link>
        </li>
        <li>
          <Link
            className={Styles.menuLink}
            href="/about"
            title="About"
            onClick={handleClick}
          >
            <span className={Styles.menuText}>About</span>
            <BsFillPersonFill style={{
              color: currentRoute === "/about" && "#C9E265",
            }} />
          </Link>
        </li>
        <li>
        <Link
            className={Styles.menuLink}
            href="/tools"
            title="Tools"
            onClick={handleClick}
          >
            <span className={Styles.menuText}>Tools</span>
            <BsTools  style={{
              color: currentRoute === "/tools" && "#C9E265",
            }} />
          </Link>
        </li>
        <li>
        <Link
            className={Styles.menuLink}
            href="/projects"
            title="Projects"
            onClick={handleClick}
          >
            <span className={Styles.menuText}>Projects</span>
            <AiFillProject  style={{
              color: currentRoute === "/projects" && "#C9E265",
            }}  />
          </Link>
        </li>
        <li>
        <Link
            className={Styles.menuLink}
            href="/contactos"
            title="Contactos"
            onClick={handleClick}
          >
            <span className={Styles.menuText}>Contactos</span>
            <AiFillContacts  style={{
              color: currentRoute === "/contactos" && "#C9E265",
            }} />
          </Link>
        </li>
      </ul>
      <hr></hr>
      <div className={Styles.darkModeButton}>
        <BtnTheme />
      </div>
    </nav>
  );
};

export default Menu;