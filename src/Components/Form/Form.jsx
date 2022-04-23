import React, {useState, useEffect, useCallback} from 'react';
import classes from './Form.module.css';
import {useDispatch} from 'react-redux';
import {cityActions} from '../Store/CityHolder';
import Spiner from '../UI/Spiner';
import Error from '../UI/Error';
const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const fetchCity = useCallback(
    async (cityInputValue) => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://places-dsn.algolia.net/1/places/query`, {
          method: 'POST',
          body: JSON.stringify({
            query: cityInputValue,
            type: 'city',
            hitsPerPage: '3',
          }),
        });
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        const data = await response.json();
        dispatch(cityActions.storeListOfCityes(data.hits));
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [inputValue],
  );
  useEffect(() => {
    if (inputValue.trim() === '') {
      return;
    }
    fetchCity(inputValue);
  }, [inputValue]);

  return (
    <form className={classes.form}>
      <input type="search" placeholder="City" onChange={inputHandler} />
      {error && <Error>{error}</Error>}
      {isLoading && <Spiner />}
    </form>
  );
};
export default Form;
