import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { Provider } from "react-redux";
const isLoggedIn = localStorage.getItem("token");
import store from './Store/index'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {isLoggedIn ? <PrivateRoute /> : <PublicRoute />}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
