import "./HeadBar.css";
import logo from "../Images/Logos/favicon.svg";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>MONOTUBE</div>
      </div>
      <div className="header-right">
        <i className="fa fa-search icon"></i>
        <i className="fa fa-bell-o icon"></i>
        <i className="fa fa-user icon"></i>
        {/* </div> */}
      </div>
    </header>
  );
}
