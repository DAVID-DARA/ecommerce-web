import { Provider } from "react-redux"
import AppRoutes from "./routes/AppRoute"

const App = () => {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  )
}

export default App
