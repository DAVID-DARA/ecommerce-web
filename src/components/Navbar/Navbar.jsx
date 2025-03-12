import { Link } from "react-router";

import Logo from "../Logo/Logo";
import styles from "./navbar.module.css";
import cart from "../../assets/icons/cart.png";
import user from "../../assets/icons/user.png";
import star from "../../assets/icons/star.png";
import search from "../../assets/icons/search.png";
import bestmenu from "../../assets/icons/bestmenu.png"
import closemenu from "../../assets/icons/close.png"
import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={`${styles.menuIcons}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? closemenu : bestmenu} width="20pxs" />
                </div>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    <ul>
                        <li>
                            <div className={styles.sidebarMobile}>
                                <img src={user} width="20px"/>
                                <img src={star} width="20px"/>
                                <img src={cart} width="20px"/>
                            </div>
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li>Shop</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Accessories</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <img src={search} width="20px" />
                    <img src={star} width="20px"  className={styles.imgHidden}/>
                    <img src={cart} width="20px" className={styles.imgHidden}/>
                    <img src={user} width="20px" className={styles.imgHidden}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;