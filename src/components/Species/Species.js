import './Species.css';

function Species(props) {

  return (
    <div className="species">
      <ul className="about-model__list">
        {Object.keys(props.species.models).map(el => <li className="about-model__list-item">{el}</li>)}
      </ul>
    </div>
  );
}

export default Species;