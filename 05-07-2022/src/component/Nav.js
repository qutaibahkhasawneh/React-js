import "../App.css";
// import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { userContext } from "./userContext";
import { useContext } from "react";
import useAuth from "./useAuth";
const Nav = () => {
  const { user, message, isLoggedIn } = useContext(userContext);
console.log(isLoggedIn)
  const [messages, handelSubmit, handelLogout] = useAuth();
  return (
    <nav className="nav-element">
      {/* <h1>Heading</h1> */}
      {/* <img src={logo} width="100" alt="logo" className="App-logo" /> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li><Link to="/about">About</Link></li> */}
        {/* <li><Link to="/contact">Contact</Link></li> */}
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/login">Register</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handelLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;