import React, { useEffect } from "react";
import querystring from "querystring";
import axios from "axios";
import { useQuery } from "../../utilities/hooks/use-query";
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

function getToken(code) {
  const params = new URLSearchParams();
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:3000/login");
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
          new Buffer(
            "2d1e159e45314b108305d32328ae4e4b:799fe8dbd7aa461b92f0933977f55d7b"
          ).toString("base64"),
      },
    }
  );

  return res.data;
}

function Login() {
  const query = useQuery();

  const code = query.get("code");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getToken(code);
        console.log(data);
      } catch (error) {
        console.log(error);
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
          client_id: "2d1e159e45314b108305d32328ae4e4b",
          scope:
            "user-read-private user-read-email user-library-read ugc-image-upload",
          redirect_uri: "http://localhost:3000/login",
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
