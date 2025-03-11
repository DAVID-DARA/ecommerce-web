import { Link } from "react-router";

import Logo from "../Logo/Logo";
import styles from "./navbar.module.css";
import cart from "../../assets/icons/cart.png";
import user from "../../assets/icons/user.png";
import star from "../../assets/icons/star.png";
import search from "../../assets/icons/search.png";


const Navbar = () => {
    return (
        <div className={styles.main_bar}>
            <div className={styles.nav_items}>
                <div className={styles.left}>
                <Logo />
                </div>
                <div className={styles.middle}>
                <ul>
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
                <div className={styles.right}>
                <img src={search} width="20px" />
                <img src={star} width="20px" />
                <img src={cart} width="20px" />
                <img src={user} width="20px" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;