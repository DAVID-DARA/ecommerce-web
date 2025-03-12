import { Link } from "react-router";
import Logo from "../Logo/Logo";
import styles from "./footer.module.css";
import facebook from "../../assets/icons/socials/facebook.png"
import youtube from "../../assets/icons/socials/youtube.png"
import twitter from "../../assets/icons/socials/twitter.png"
import instagram from "../../assets/icons/socials/instagram.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            {/* Logo & Description */}
            <div className={styles.footerLogo}>
                <Logo />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className={styles.socialIcons}>
                    <img src={facebook} alt="Facebook" />
                    <img src={youtube} alt="YouTube" />
                    <img src={twitter} alt="Twitter" />
                    <img src={instagram} alt="Instagram" />
                </div>
            </div>

            {/* Links Section */}
            <div className={styles.footerLinks}>
                <div>
                    <h4>Company</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/career">Career</Link>
                </div>
                <div>
                    <h4>Customer Services</h4>
                    <Link to="/account">My Account</Link>
                    <Link to="/track-order">Track Your Order</Link>
                    <Link to="/return">Return</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <div>
                    <h4>Our Information</h4>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">User Terms & Conditions</Link>
                    <Link to="/return-policy">Return Policy</Link>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>+0123-456-789</p>
                    <p>example@gmail.com</p>
                    <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                </div>
            </div>
        </div>

      {/* Footer Bottom */}
        <div className={styles.footerBottom}>
            <p>Copyright © 2024 Clothing Website Design. All Rights Reserved.</p>
            <div className={styles.languageCurrency}>
                <select>
                    <option>English</option>
                    <option>French</option>
                </select>
                <span>|</span>
                <select>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
