import './App.css';
import Main from "../Main/Main";
import React from "react";
import {data} from "../../utils/constans";
import {withRouter} from 'react-router-dom';
function App(props) {

  const [aboutModel, setAboutModel] = React.useState({basic: {}, species: {}})
  const [auto, setAuto] = React.useState('')

  const getModel = (auto, model) => {
    setAuto(auto + ' ' + model)
    const object = JSON.parse(localStorage.getItem('data'))
    setAboutModel(object[auto][model])
  }

  const returnAutoProperty = (value) => {
    return value.split(' ')[0]
  }

  const handleChangeValue = (variableValue, value) => {
    const object = JSON.parse(localStorage.getItem('data'))
    const producer = auto.split(' ')[0]
    const model = auto.split(' ').slice(1).join(' ')
    const property = returnAutoProperty(variableValue);
    object[producer][model][property] = Number(value);
    localStorage.setItem('data', JSON.stringify(object))
  }

  React.useEffect(()=> {
    props.history.push('/')
    if (!localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify(data));
    }
    console.log(JSON.parse(localStorage.getItem('data')))
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

export default withRouter(App);
