import './Main.css';
import Tree from "../Tree/Tree";
import AboutModel from "../AboutModel/AboutModel";

function Main(props) {
  return (
    <div className="main">
      <Tree
        onGetModel={props.onGetModel}
      />
      <AboutModel
        auto={props.auto}
        aboutModel={props.aboutModel}
        onChangeValue={props.onChangeValue}
      />
    </div>
  );
}

export default Main;