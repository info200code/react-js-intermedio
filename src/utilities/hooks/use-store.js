import React, { useEffect, useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Service } from "../../services";

const StoreContext = createContext({});

export const StoreProvider = ({ children, session }) => {
  const { token } = session;
  const authProvider = useStoreProvider(token);

  return (
    <StoreContext.Provider value={{ session, ...authProvider }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreProvider = (token) => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const errorHandler = () => history.push("/login");

  const service = new Service(token);

  useEffect(() => {
    const getUserData = async () => {
      const data = await service.getUser();
      setUser(data);
      setLoading(false);
    };

    getUserData();
  }, []);

  return { user, loading, service };
};

export const useStore = () => useContext(StoreContext);
