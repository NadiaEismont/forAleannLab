import axios from 'axios';


axios.defaults.baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const getListOfJobs = async () => {
  const { data } = await axios.get('');
  return data;
};






// const jobsReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_JOBS':
//       return action.jobs;
//     case 'LOAD_MORE_JOBS':
//       return [...state, ...action.jobs];
//     default:
//       return state;
//   }
// };
// export default jobsReducer;