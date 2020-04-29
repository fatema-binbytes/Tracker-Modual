import immutable from 'immutable';

import actions from '../constants';

const getData = () => {
  return (dispatch) => {
    fetch('https://api.covid19india.org/data.json')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: actions.GET_DATA,
          payload: immutable.fromJS(json),
        });
      });
  };
};
const setState = (state) => {
  console.log(state);
  return (dispatch) => {
    fetch('https://api.covid19india.org/v2/state_district_wise.json')
      .then((response) => response.json())
      .then((json) => {
        const index = json.findIndex((x) => x.state === state);
        console.log(json[index].districtData);
        dispatch({
          type: actions.STATE,
          payload: immutable.fromJS(json[index].districtData),
        });
      });
  };
};

export default {
  getData,
  setState,
};
