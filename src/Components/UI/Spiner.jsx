import classes from './Spiner.module.css';
import spinerImg from '../../assets/cloudy.png';
const Spiner = () => {
  return (
    <div className={classes.imageSpinner}>
      <img className={classes.imageAnimation} src={spinerImg} alt="cloudy"></img>
    </div>
  );
};
export default Spiner;
