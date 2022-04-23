import React, {useEffect, useState, Fragment} from 'react';
import Spiner from '../UI/Spiner';
import {useDispatch, useSelector} from 'react-redux';
import {cityActions} from '../Store/CityHolder';
import ItemsMeteoCardsMain from '../Items/ItemsMeteoCardsMain';
import ItemsMeteoCardsSecondary from '../Items/ItemsMeteoCardsSecondary';
import ListItems from '../Items/ListItems';
import Error from '../UI/Error';
const MeteoRequest = () => {
  const dispatch = useDispatch();
  const isCityExiste = useSelector((state) => state.city.cityValue);
  const isHaveRequest = useSelector((state) => state.city.isEntred);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredMeteo, setEnteredMeteo] = useState({});
  const sendsRequestMeteo = async function (element) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=2521e64289208e681d392934a06cd2cd`,
        {
          method: 'POST',
          body: JSON.stringify({
            hitsPerPage: '1',
          }),
        },
      );

      if (!response.ok) {
        throw new Error(response.message || 'Demande échoué(Request failed!)');
      }

      const data = await response.json();
      setEnteredMeteo(data);
      dispatch(cityActions.isDataEntred());
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isCityExiste.trim() === '') {
      return;
    }
    sendsRequestMeteo(isCityExiste);
    dispatch(cityActions.reset());
  }, [isCityExiste]);
  const reFactoring = (event) => {
    return Math.trunc(event - 273, 15);
  };
  const {main, weather, wind} = enteredMeteo;
  let content;
  if (isHaveRequest) {
    content = (
      <Fragment>
        <ItemsMeteoCardsMain
          temperature={reFactoring(main.temp)}
          realFeeling={reFactoring(main.feels_like)}
          iconImage={weather[0].icon}
          meteoName={weather[0].main}
        />
        <ItemsMeteoCardsSecondary
          humidity={main.humidity}
          pressure={main.pressure}
          max={reFactoring(main.temp_max)}
          min={reFactoring(main.temp_min)}
          speed={wind.speed}
        />
        <ListItems uniqueKey={enteredMeteo.id} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {error && <Error onTranferFn={setError}>{error}</Error>}
      {isLoading && <Spiner />}
      {content}
    </Fragment>
  );
};
export default MeteoRequest;
