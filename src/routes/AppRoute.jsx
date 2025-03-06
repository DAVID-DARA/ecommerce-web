import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "../pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "../features/store";

const AppRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes;