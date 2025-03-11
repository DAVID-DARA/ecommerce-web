import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "../pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "../features/store";
import Layout from "../components/Layout";

const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route index element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes;