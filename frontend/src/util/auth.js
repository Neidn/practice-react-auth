import {redirect} from "react-router-dom";

export const getTokenDuration = () => {
  const storageExpiration = localStorage.getItem('expiration');
  const expiration = storageExpiration ? new Date(storageExpiration) : null;
  const now = new Date();

  return expiration.getTime() - now.getTime();
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

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
