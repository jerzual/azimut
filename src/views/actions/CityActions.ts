import fetch from 'whatwg-fetch';

export default class CityActions {
  fetchCities() {
    return fetch(`/api/cities`)
      .then(response => {})
      .catch(() => {});
  }
  citiesFetched() {}
  fetchCity(cityId: string) {
    return fetch(`/api/cities/${cityId}`)
      .then(response => {})
      .catch(() => {});
  }
  cityFetched() {}
  defend() {}
  inspect() {}
}
