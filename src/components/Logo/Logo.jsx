import { Link } from "react-router";
import styles from "./logo.module.css"
import iconner from "../../assets/images/logo-icon.png"

const Logo = ({ imgBorderRadius = "0px", textColor = "black", textSize = "30px", imgWidth = "35px"}) => {

    const logoAdditionalStyle = {
        borderRadius: imgBorderRadius,
        width: imgWidth
    };

    const logoTextStyle = {
        fontSize: textSize,
        color: textColor
    };

    return (
        <div className={styles.logo}>
            <Link className={styles.logo_link} to="/" >
                <img src={iconner} alt="lorem-logo" style={logoAdditionalStyle} />
                <span style={logoTextStyle}>Lorem</span>
            </Link>
        </div>
    )
}

export default Logo;