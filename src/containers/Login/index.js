import React, { useEffect } from "react";
import querystring from "querystring";
import axios from "axios";
import { useQuery } from "../../utilities/hooks/use-query";
import { useHistory } from "react-router-dom";
import { clientId, clientSecret, redirectUri } from "../../utilities/config";
import "./styles.css";

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

async function getToken(code) {
  const params = new URLSearchParams();
  params.append("code", code);
  params.append("redirect_uri", redirectUri);
  params.append("grant_type", "authorization_code");

  // Promesas
  // return axios
  //   .post("https://accounts.spotify.com/api/token", params, {
  //     headers: {
  //       Authorization:
  //         "Basic " +
  //         new Buffer(
  //           "2d1e159e45314b108305d32328ae4e4b:799fe8dbd7aa461b92f0933977f55d7b"
  //         ).toString("base64"),
  //     },
  //   })
  //   .then((res) => res.data);

  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    params,
    {
      headers: {
        Authorization:
          "Basic " +
          new Buffer(`${clientId}:${clientSecret}`).toString("base64"),
      },
    }
  );

  return res.data;
}

function Login() {
  const query = useQuery();
  const history = useHistory();

  const code = query.get("code");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getToken(code);
        localStorage.setItem("sp_token", JSON.stringify(data));
        history.push("/");
      } catch (error) {
        console.log(error);
        history.push("/login");
      }
    };

    if (code) {
      getData();
    }
  }, []);

  const onClick = () => {
    window.location.replace(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: clientId,
          scope:
            "user-read-private user-read-email user-library-read ugc-image-upload",
          redirect_uri: redirectUri,
          state: generateRandomString(16),
        })
    );
  };

  return (
    <div className="login">
      <h2>Reproductor de Spotify</h2>
      <button onClick={onClick}>Iniciar sesión con Spotify</button>
    </div>
  );
}

export default Login;
