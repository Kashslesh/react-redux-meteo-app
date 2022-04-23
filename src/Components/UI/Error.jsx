import classes from './Error.module.css';
import {useDispatch} from 'react-redux';
import {cityActions} from '../Store/CityHolder';
const Error = (props) => {
  const dispatch = useDispatch();
  const resetHandler = () => {
    dispatch(cityActions.reset());
    props.onTranferFn(false)
  };
  return (
    <div className={classes.error} onClick={resetHandler}>
      <p>{props.children}</p>
    </div>
  );
};
export default Error;
