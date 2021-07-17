import './Tree.css';
import data from '../../utils/data.json'

function Tree() {

  const createTree = (obj) => {
    if(!Object.keys(obj)) return;
    return Object.keys(obj).map((el) => {
      return <li>{el} {Object.keys(obj[el]).map(item => <ul>{item}</ul>)}</li>
    })
  }

  const tree = createTree(data)

  return (
    <div className="tree">
      <ul>
        {tree}
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