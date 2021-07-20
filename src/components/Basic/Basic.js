import './Basic.css';

function Basic(props) {

  return (
    <div className="basic">
      <ul className="about-model__list">
        <li className="about-model__list-item" onDoubleClick={props.onChangeValue}>Цена {props.basic.price}</li>
        <li>Длина {props.basic.length}</li>
        <li>Ширина {props.basic.width}</li>
        <li>Высота {props.basic.height}</li>
      </ul>
    </div>
  );
}

export default Basic;