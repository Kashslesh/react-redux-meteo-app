import Card from '../UI/Card/Card';
import classes from './ItemsMeteoCardsSecondary.module.css';

const ItemsMeteoCardsSecondary = (props) => {
  return (
    <Card>
      <div className={classes.listItems}>
        <ul className={classes.leftSide}>
          <li>Humidity</li>
          <li>Pressure</li>
          <li>Maximum</li>
          <li>Minimum</li>
          <li>Wind Speed</li>
        </ul>
        <ul className={classes.rightSide}>
          <li>{props.humidity}</li>
          <li>{props.pressure} pa</li>
          <li>{props.max}</li>
          <li>{props.min}</li>
          <li>{props.speed} km/h</li>
        </ul>
      </div>
    </Card>
  );
};
export default ItemsMeteoCardsSecondary;
