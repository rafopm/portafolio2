'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import { AiFillHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { BsFillPersonFill, BsTools } from "react-icons/bs";
import Styles from "../styles/Menu.module.css";
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
    <nav className={Styles.container}>
      <div className={Styles.menu}>
        <div className={`text-color-tertiary ${Styles.logoContainer}`}>
          Rafopm
        </div>
        <ul className={Styles.menuItems}>

          <li>
            <Link
              className={`${currentRoute === "/" ? Styles.activeLink : Styles.menuLink}`}
              href="/"
              title="Home"
              onClick={handleClick}
            >
              <span className={Styles.menuText}>Home</span>
              <AiFillHome
                className={Styles.icon}
                style={{
                  color: currentRoute === "/" && "#C9E265",
                }}
              />
            </Link>
          </li>
          <li>
            <Link
              className={`${currentRoute === "/about" ? Styles.activeLink : Styles.menuLink}`}
              href="/about"
              title="Sobre mi"
              onClick={handleClick}
            >
              <span className={Styles.menuText}>Sobre mi</span>
              <BsFillPersonFill className={Styles.icon}
                style={{
                  color: currentRoute === "/about" && "#C9E265",
                }} />
            </Link>
          </li>
          <li>
            <Link
              className={`${currentRoute === "/tools" ? Styles.activeLink : Styles.menuLink}`}
              href="/tools"
              title="Skills"
              onClick={handleClick}
            >
              <span className={Styles.menuText}>Skills</span>
              <BsTools className={Styles.icon}
                style={{
                  color: currentRoute === "/tools" && "#C9E265",
                }} />
            </Link>
          </li>
          <li>
            <Link
              className={`${currentRoute === "/projects" ? Styles.activeLink : Styles.menuLink}`}
              href="/projects"
              title="Proyectos"
              onClick={handleClick}
            >
              <span className={Styles.menuText}>Proyectos</span>
              <AiFillProject className={Styles.icon}
                style={{
                  color: currentRoute === "/projects" && "#C9E265",
                }} />
            </Link>
          </li>
          <li>
            <Link
              className={`${currentRoute === "/contactos" ? Styles.activeLink : Styles.menuLink}`}
              href="/contactos"
              title="Contactos"
              onClick={handleClick}
            >
              <span className={Styles.menuText}>Contactos</span>
              <AiFillContacts className={Styles.icon}
                style={{
                  color: currentRoute === "/contactos" && "#C9E265",
                }} />
            </Link>
          </li>
        </ul>
        <hr></hr>
        <div className={Styles.darkModeButton}>
          <BtnTheme />
        </div>
      </div>
    </nav>
  );
};

export default Menu;