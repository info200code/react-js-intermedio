const getLS = () => {
  const storedInfo = localStorage.getItem("sp_token");
  return JSON.parse(storedInfo);
};

export const getToken = () => {
  const storedToken = getLS();
  return { token: storedToken.access_token };
};
