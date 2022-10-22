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
        {/* <div className="icons"> */}
        <button className="icon"></button>
        <button className="icon"></button>
        <button className="icon"></button>
        <button className="icon"></button>
        {/* </div> */}
      </div>
    </header>
  );
}
