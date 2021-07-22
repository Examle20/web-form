import './Basic.css';
import React from "react";

function Basic(props) {

  const handleChange = (e) => {
    const value = prompt('Введите новое значение')
    if(value) {
      props.onChangeValue(e.target.textContent, value);
      e.target.textContent = e.target.textContent.split(' ')[0] + ' - ' + value;
    }
  }

  return (
    <div className="basic">
      <ul className="about-model__list">
        {Object.keys(props.basic).map((el) => {
          if(typeof props.basic[el] !== 'object')
            return <li className="about-model__list-item about-model__list-item_basic" onDoubleClick={handleChange}>{`${el} - ${props.basic[el]}`}</li>
        })}
      </ul>
    </div>
  );
}

export default Basic;