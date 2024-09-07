import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => 
    {
      const onlineStatus = useOnlineStatus()
        const [loginToggleBtn, setLoginToggleBtn] = useState("Login")
      return(
        <div className=" flex justify-between shadow-xl bg-[#ffffff] px-2 py-0">
  <div className="w-36">
    <Link to="/">
      <img className="logo" src={LOGO_URL} alt="Logo" />
    </Link>
  </div>
  <div className="flex items-center space-x-4">
    <p className="text-green-500">Online: {onlineStatus ? "🟢" : "🔴"}</p>
    <nav>
      <ul className="flex space-x-4">
        <Link className="header-points text-gray-700 font-semibold hover:text-blue-500" to="/">Home</Link>
        <Link className="header-points text-gray-700 font-semibold hover:text-blue-500" to="about">About-Us</Link>
        <Link className="header-points text-gray-700 font-semibold hover:text-blue-500" to="contactus">Contact-Us</Link>
        <Link className="header-points text-gray-700 font-semibold hover:text-blue-500" to="grocery">Grocery</Link>
        <Link className="header-points text-gray-700 font-semibold hover:text-blue-500" to="cart">Cart</Link>
      </ul>
    </nav>
    <div className="btn-container">
      <button className="login-btn bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => {
          setLoginToggleBtn(loginToggleBtn === "Login" ? "Logout" : "Login");
        }}
      >
        {loginToggleBtn}
      </button>
    </div>
  </div>
</div>
      )
    }

export default Header;