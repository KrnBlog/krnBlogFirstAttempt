import "./BottomBar.css";

export default function BottomBar() {
  return (
    <div className="bottombar">
      <a href="#Home">
        <i className="fa fa-home bottomBar-icons"></i>
      </a>
      <a href="#Video">
        <i className="fa fa-server bottomBar-icons"></i>
      </a>
      <a href="#AddMore">
        <i className="fa fa-plus-square-o bottomBar-icons"></i>
      </a>
      <a href="#Subscription">
        <i className="fa fa-ticket bottomBar-icons"></i>
      </a>
      <a href="#Library">
        <i className="fa fa-vcard-o bottomBar-icons"></i>
      </a>
      {/* <button className=""></button> */}
      {/* <button className="bottomBar-icons"></button>
      <button className="bottomBar-icons"></button> */}
      {/* <button className="bottomBar-icons"></button> */}
      {/* <button className="bottomBar-icons"></button> */}
      {/* <button className="bottomBar-icons"></button> */}
    </div>
  );
}
