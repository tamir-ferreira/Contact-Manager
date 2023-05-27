import { createContext, useEffect, useState } from "react";
import { api, createClient, getClient, loginClient } from "../services/api";
// import { Rotate } from "../../components/Rotate";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  // const isMobile = useMediaQuery({ maxWidth: 600 });
  const isLandscape = useMediaQuery({
    query: "(orientation: landscape)",
  });
  const isMobile = useMediaQuery({ query: "(pointer: fine)" });

  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [waitClient, setWaitClient] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadClient = async () => {
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      if (!token) {
        setWaitClient(false);
        return;
      }

      const response = await getClient();

      if (response !== null) {
        setClient(response);
        navigate("/dashboard");
      } else {
        localStorage.clear();
      }

      setWaitClient(false);
    };

    loadClient();
  }, []);

  const loginSubmit = async (data) => {
    setLoading(true);
    const response = await loginClient(data);
    const { token } = response;

    if (response) {
      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await getClient();
      setClient(response);

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1000);
    } else {
      setLoading(false);
    }
  };

  const registerSubmit = async (data) => {
    setLoading(true);

    const response = await createClient(data);
    if (response) {
      setTimeout(() => {
        setLoading(false);
        navigate(`/`);
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        isMobile,
        isLandscape,
        client,
        loading,
        loading2,
        waitClient,
        showPass,
        setClient,
        loginSubmit,
        registerSubmit,
        setLoading,
        setLoading2,
        setShowPass,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
