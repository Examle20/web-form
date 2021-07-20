import './Main.css';
import Tree from "../Tree/Tree";
import AboutModel from "../AboutModel/AboutModel";
import {Route} from "react-router-dom";

function Main(props) {
  return (
    <div className="main">
      <Route path="/">
        <Tree
          onGetModel={props.onGetModel}
        />
        <AboutModel
          auto={props.auto}
          aboutModel={props.aboutModel}
          onChangeValue={props.onChangeValue}
        />
      </Route>
    </div>
  );
}

export default Main;