import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <h1 className={styles.h1Styles}>HomePages</h1>
            <Footer />
        </>
    );
}

export default HomePage;