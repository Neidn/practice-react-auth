import {redirect} from "react-router-dom";

export const action = ({request, params}) => {
  localStorage.removeItem('token');
  return redirect('/');
};
