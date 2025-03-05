import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "../pages/HomePage/HomePage";
import { Provider } from "react-redux";

const AppRoutes = () => {
    return (
        // <Provider store={}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        {/* </Provider> */}
    )
}

export default AppRoutes;