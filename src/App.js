import "./App.css";
import Item from "./components/item";
import Counter from "./components/counter";
import Email from "./components/email";
import Checkbox from "./components/checkbox";
import Videos from "./components/videos";

function App() {
  const videoList = ["Youtube", "Udemy", "Snapchat"];
  return (
    <div className="App">
      <h1>Developer</h1>
      <button>Click</button>
      <h3 className="green">Yeşil yazı.</h3>
      <p className="headerText" data-testid="loremText">
        Lorem ipsum
      </p>
      <Item title={"Example"} description={"Description"} />
      {/* <Counter />
      <Email />
      <Checkbox /> */}
      <Videos videoList={videoList} />
    </div>
  );
}

export default App;
