import { Outlet } from "react-router";

import Navbar from "./Navbar/Navbar";
import styles from "./Layout.module.css";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
    <div className={styles.layout}>
        <Navbar />
        <main className={styles.mainContent}>
            <Outlet />  {/* This is where page content will render */}
        </main>
        <Footer />
    </div>
    )
};

export default Layout;