import './Tree.css';

function Tree(props) {

  const handleClickModel = (e) => {
    const auto = e.target.parentNode.textContent.split(' ')[0];
    const model = e.target.textContent;
    props.onGetModel(auto, model)
  }

  const createTree = (obj) => {
    if(!Object.keys(obj)) return;
    return Object.keys(obj).map((el) => {
      return <li className="tree__list-auto">{el} {Object.keys(obj[el]).map(item => <ul onClick={handleClickModel} className="tree__list-model">{item}</ul>)}</li>
    })
  }

  const tree = createTree(JSON.parse(localStorage.getItem('data')))

  return (
    <div className="tree">
      <ul className="tree__list">
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