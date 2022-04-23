import Card from '../UI/Card/Card';
import React from 'react';
import classes from './ListItems.module.css';
import {useSelector} from 'react-redux';
const ListItems = (props) => {
  const stokeCityes = useSelector((state) => state.city.stokeOfCityes);
  let content = stokeCityes.map((city) => <li key={city}>{city}</li>);
  return (
    <Card>
      <div className={classes.listOfcityes}>
        <h3>List of requested cities</h3>
        <ul>{content}</ul>
      </div>
    </Card>
  );
};
export default React.memo(ListItems);
