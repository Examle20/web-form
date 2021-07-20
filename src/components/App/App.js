import './App.css';
import Main from "../Main/Main";
import React from "react";
import {data} from "../../utils/constans";

function App() {
  const [aboutModel, setAboutModel] = React.useState({basic: {}, species: {}})
  const [auto, setAuto] = React.useState('')

  const getModel = (auto, model) => {
    setAuto(auto + ' ' + model)
    const object = JSON.parse(localStorage.getItem('data'))
    setAboutModel(object[auto][model])
  }

  const handleChangeValue = (e) => {
    const value = prompt('Введите новое значение')
    console.log(e.target)
  }

  React.useEffect(()=> {
    if (!localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify(data));
    }
  },[])

  return (
    <div className="App">
      <Main
        onGetModel={getModel}
        aboutModel={aboutModel}
        onChangeValue={handleChangeValue}
        auto={auto}
      />
    </div>
  );
}

export default App;
