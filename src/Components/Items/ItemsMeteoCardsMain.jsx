import Card from '../UI/Card/Card';
import classes from './ItemsMeteoCardsMain.module.css';
const ItemsMeteoCardsMain = (props) => {
  let urlForImages = `http://openweathermap.org/img/wn/${props.iconImage}@2x.png`;
  return (
    <Card>
      <div className={classes.cardPosition}>
        <article className={classes.temperatureSide}>
          <p id={classes.temperInfo}>TEMPERATURE</p>
          <h2>{props.temperature }°</h2>
          <p>Real feel: {props.realFeeling }°</p>
        </article>
        <article>
          <img src={urlForImages} alt={props.meteoName} />
          <h3>{props.meteoName}</h3>
        </article>
      </div>
    </Card>
  );
};
export default ItemsMeteoCardsMain;
