import { combineReducers } from 'redux';
import getcountryList from './getCountryList';
import getMovieCarouselList from './getMovieCarouselList';
import main from './main'
import detailCountry from './getDetailCountry';
const appreducer = combineReducers({
  main:main,
  countryList: getcountryList,
  detailCountry:detailCountry,
  getMovieCarouselList: getMovieCarouselList,
});

export default appreducer;
