import './Species.css';

function Species(props) {
  console.log(props.species.models)
  return (
    <div className="species">
      <ul className="about-model__list">
        {Object.keys(props.species.models).map(el => <li>{el}</li>)}
      </ul>
    </div>
  );
}

export default Species;