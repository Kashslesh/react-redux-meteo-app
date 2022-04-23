import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cityActions} from '../Store/CityHolder';
import classes from './Items.module.css';

const Items = (props) => {
  const dispatch = useDispatch();
  const listOfCityes = useSelector((state) => state.city.listOfCityes);
  const isHasRequest = useSelector((state) => state.city.isRender);
  let content;
  const getCityHandler = (event) => {
    dispatch(cityActions.getCity(event.target.innerText));
    content = '';
  };
  if (isHasRequest) {
    content = listOfCityes.map((item) => (
      <li key={item.objectID} onClick={getCityHandler}>
        {item.locale_names.default[0]}
      </li>
    ));
  }
  return <ul className={classes.list}>{content}</ul>;
};
export default Items;
