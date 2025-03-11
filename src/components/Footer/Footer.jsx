import styles from "./footer.module.css"
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_main}>
                <div className={styles.footer_item_one}>
                    <div className={styles.item_one_contentl}>
                        <div className={styles.logo_container}><Logo imgBorderRadius="50px" textColor="white" imgWidth="45px"/></div>
                        
                        <span className={styles.iOne_span}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim hic consectetur quia commodi iste sapiente blanditiis illum fuga possimus quos!</span>
                    </div>
                    <div className={styles.item_one_contentr}>
                        <div className={styles.contentr_main}>
                            <ul>
                                <li className={styles.contentr_headings}>Company</li>
                                <li>Customer Service</li>
                                <li>Our Information</li>
                                <li>Contact Info</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className={styles.contentr_main}>
                            <ul>
                                <li className={styles.contentr_headings}>Customer Service</li>
                                <li>My Account</li>
                                <li>Track Your Order</li>
                                <li>Return</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className={styles.contentr_main}>
                            <ul>
                                <li className={styles.contentr_headings}>Our Information</li>
                                <li>Privacy</li>
                                <li>User Terms and Conditions</li>
                                <li>Return Policy</li>
                            </ul>
                        </div>
                        <div className={styles.contentr_main}>
                            <ul>
                                <li className={styles.contentr_headings}>Contact Info</li>
                                <li>+0123-456-789</li>
                                <li>contact@lorem.com</li>
                                <li>16, ABC Rodad, East Londen, Divided Kingdom</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_item_two}>
                    <hr />
                </div>
                <div className={styles.footer_item_three}>
                    <span className={styles.iThree_span}>Copyright 2024 &#169; Lorem Website Design. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;