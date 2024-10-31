import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
const isLoggedIn = localStorage.getItem('token')

function App() {
  return (
    <>
      <BrowserRouter> 
      {isLoggedIn ? <PrivateRoute /> : <PublicRoute />}
      {/* {isLoggedIn ? "Authorized" : "Please login first"} */}
        </BrowserRouter>
    </>
  );
}

export default App;
