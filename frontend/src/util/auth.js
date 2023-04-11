import {redirect} from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

export const tokenLoader = async ({request, params}) => {
  return getAuthToken();
};

export const checkAuthLoader = async ({request, params}) => {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth?mode=login');
  }

  return null;
};
