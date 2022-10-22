import "./Home.css";
// import logo from "./logo.svg";
import Card from "./Card";
import Slider from "./Slider";
export default function Home() {
  let dataArray = [
    {
      key: 8,
      title: "diwali festival we will deploy",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "more",
      html: <h2>okg</h2>
    },
    {
      key: 7,
      title: "diwali festival 7  tag",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "more",
      html: <h2>okg</h2>
    },
    {
      key: 6,
      title: "diwali festival 6 tag",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "more",
      html: <h2>okg</h2>
    },
    {
      key: 5,
      title: "diwali festival 5 tag",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "more",
      html: <h2>okg</h2>
    },
    {
      key: 4,
      title: "diwali festival 4 tag",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "more",
      html: <h2>okg</h2>
    },
    {
      key: 3,
      title: "new blog post",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "educatve",
      html: <h2>okg</h2>
    },
    {
      key: 2,
      title: "diwali festival comming soon",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "festival",
      html: <h2>okg</h2>
    },
    {
      key: 1,
      title: "wishing you a safe visit",
      description:
        "Whats up every this is our first web page to prevent lorem ipsum test case formalistion capital intrest geoergia paris tokiyo plly newton green revolution wakf board ",
      tag: "innovative",
      html: <h2>okg</h2>
    }
  ];

  return (
    <>
      <div className="dispalayrea">
        <div className="slider">
          <Slider />
        </div>
        {dataArray.map((currentValue) => (
          <Card
            key={currentValue.key}
            title={currentValue.title}
            tag={currentValue.tag}
            description={currentValue.description}
            html={currentValue.html}
          ></Card>
        ))}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        data.map((user) => (
        <div className="user">{user}</div>
      ))
        <Card />
        <Card />
                  for(let i = 0 ; i < dataArray.length ; i++){
            console.log('hi')
          }
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
}
