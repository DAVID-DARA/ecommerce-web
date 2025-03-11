import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";

import HomePage from "../pages/HomePage/HomePage";
import store from "../features/store";
// import Layout from "../components/Layout";

const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Layout />} /> */}
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes;