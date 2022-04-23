import {configureStore} from '@reduxjs/toolkit';
import CitySlicer from './CityHolder';
const Store = configureStore({
  reducer: {
    city: CitySlicer,
  },
});
export default Store;
