import "./Card.css";
import demo from "./logo.svg";

export default function Home(props) {
  const title = props.title;
  const description = props.description;
  const tool = props.tag;
  // const html = props.html;
  // let xao = {a : <h2>okg</h2>};
  // let x = <h2>ok</h2> ;
  // let xa = [<h2>okg</h2>];
  // console.log(xao.a)
  return (
    <>
      <div className="card">
        <div className="content">
          <img src={demo} alt="" className="img" />
          <div className="details">
            <span>{title}</span>
            <p className="content">{description}</p>
            <button className="follow">{tool}</button>
          </div>
        </div>
      </div>
    </>
  );
}
