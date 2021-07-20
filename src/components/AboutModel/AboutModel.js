import './AboutModel.css';
import Basic from "../Basic/Basic";
import Species from "../Species/Species";
import { Route, NavLink, useLocation } from 'react-router-dom';
function AboutModel(props) {
  const location = useLocation();
  const model = location.pathname.toString().split('/')[1]
  return (
    <div className="about-model">
      {model &&
      <nav className="about-model__tabs">
        <NavLink exact to={`/${model}/basic`} activeClassName="about-model__tab_active" className="about-model__tab">Основные характеристики</NavLink>
        <NavLink exact to={`/${model}/species`} activeClassName="about-model__tab_active" className="about-model__tab">Разновидности двигателей</NavLink>
      </nav>
      }
      <div className="about-model__pages">
        <Route path={`/${model}/basic`}>
          <Basic
            basic={props.aboutModel}
            onChangeValue={props.onChangeValue}
          />
        </Route>
        <Route path={`/${model}/species`}>
          <Species
            species={props.aboutModel}
          />
        </Route>
      </div>
    </div>
  );
}

export default AboutModel;
