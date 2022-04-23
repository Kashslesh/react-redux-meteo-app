import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  cityValue: '',
  isEntred: false,
  listOfCityes: [{}],
  isRender: false,
  stokeOfCityes: [],
};
const CitySlicer = createSlice({
  name: 'Cityes',
  initialState,
  reducers: {
    getCity(state, action) {
      state.cityValue = action.payload;
      state.stokeOfCityes.push(action.payload);
    },
    isDataEntred(state) {
      state.isEntred = true;
    },
    storeListOfCityes(state, action) {
      state.isRender = true;
      state.listOfCityes = action.payload;
    },
    reset(state) {
      state.cityValue = '';
      state.listOfCityes = [{}];
      state.isRender = false;
      state.isEntred = false;
    },
  },
});
export const cityActions = CitySlicer.actions;
export default CitySlicer.reducer;
