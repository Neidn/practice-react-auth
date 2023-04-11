export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

export const tokenLoader = async ({request, params}) => {
  return getAuthToken();
};
