import './App.css';
import Main from "../Main/Main";
import React from "react";
import {withRouter} from 'react-router-dom';
function App(props) {

  const [aboutModel, setAboutModel] = React.useState({basic: {}, species: {}})
  const [auto, setAuto] = React.useState('')
  const [data, setData] = React.useState({})

  const [isSave, setIsSave] = React.useState(false)
  const [saveHref, setSaveHref] = React.useState('')
  const [saveDownload, setSaveDownload] = React.useState('')

  const handleHideSaveLink = () => {
    setIsSave(false);
  }

  const getModel = (auto, model) => {
    setAuto(auto + ' ' + model)
    setAboutModel(data[auto][model])
  }

  const returnAutoProperty = (value) => {
    return value.split(' ')[0]
  }

  const handleChangeValue = (variableValue, value) => {
    const producer = auto.split(' ')[0]
    const model = auto.split(' ').slice(1).join(' ')
    const property = returnAutoProperty(variableValue);
    data[producer][model][property] = Number(value);
  }

  const handleSelectFile = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = (readerEvent) => {
      setData(JSON.parse(readerEvent.target.result.toString()))
    }
  }

  const handleSaveValues = () => {
    const value = prompt('Введите название файла')
    const file = new Blob(
      [JSON.stringify(data)],
      { type: 'application/json'})
    setSaveHref(URL.createObjectURL(file))
    setSaveDownload(value)
    setIsSave(true)
  }

  React.useEffect(()=> {
    props.history.push('/')
  },[])

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container-wrapper">
          <input type="file" onChange={handleSelectFile}/>
          <button type="button" onClick={handleSaveValues}>Сохранить изменения</button>
          {isSave && <a href={saveHref} download={saveDownload} onClick={handleHideSaveLink} className="app__link-save">Скачать файл</a>}
        </div>
        <Main
          data={data}
          onGetModel={getModel}
          aboutModel={aboutModel}
          onChangeValue={handleChangeValue}
          auto={auto}
        />
      </div>
    </div>
  );
}

export default withRouter(App);
