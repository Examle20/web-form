import './AboutModel.css';
import Basic from "../Basic/Basic";
import Species from "../Species/Species";
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
function AboutModel(props) {

  return (
    <BrowserRouter>
    <div className="about-model">
      <nav className="about-model__tabs">
        <NavLink to="/basic" className="about-model__tab">Основные характеристики</NavLink>
        <NavLink to="/species" className="about-model__tab">Разновидности двигателей</NavLink>
      </nav>
      <h2>{props.auto}</h2>
      <div className="about-model__pages">
        <Route path="/basic">
          <Basic
            basic={props.aboutModel}
            onChangeValue={props.onChangeValue}
          />
        </Route>
        <Route path="/species">
          <Species
            species={props.aboutModel}
          />
        </Route>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default AboutModel;
