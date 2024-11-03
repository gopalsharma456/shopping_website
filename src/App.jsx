import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { Provider } from "react-redux";
const isLoggedIn = localStorage.getItem("token");
import store from './Store/index'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {isLoggedIn ? <PrivateRoute /> : <PublicRoute />}
          <ToastContainer position="top-center" autoClose={3000}/>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
