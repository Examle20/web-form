import './Tree.css';
import {NavLink} from "react-router-dom";


function Tree(props) {

  const handleClickModel = (e) => {
    const auto = e.target.parentNode.textContent.split(' ')[0];
    const model = e.target.textContent;
    props.onGetModel(auto, model)
  }

  const createTree = (obj) => {
    if(!Object.keys(obj)) return;
    return Object.keys(obj).map((el) => {
      return <li className="tree__list-auto">{el} {Object.keys(obj[el]).map(item => <NavLink activeClassName="tree__list-auto_active" to={`/${item}`} onClick={handleClickModel} className="tree__list-model">{item}</NavLink>)}</li>
    })
  }

  return (
    <div className="tree">
      <ul className="tree__list">
        {Object.keys(props.data).length && createTree(props.data)}
      </ul>
    </div>
  );
}

export default Tree;

// const createTree = (obj) => {
//   if(!Object.keys(obj)) return;
//   return Object.keys(obj).map((el) => {
//     return <li>{el} { Object.keys(obj[el]).length ?<ul>{createTree(obj[el])}</ul> : ''}</li>
//   })
// }