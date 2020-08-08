import axios from "axios";
import querystring from "querystring";

export class Service {
  constructor(token) {
    this.token = token;
    this.axios = this.createInstance(token);
  }

  createInstance(token) {
    const axiosInstance = axios.create({
      baseURL: "https://api.spotify.com/v1",
      headers: {
        Authoritation: `Bearer ${token}`,
      },
    });

    return axiosInstance;
  }

  async getPlaylists() {
    const res = await this.axios.get("/me/playlists");
    return res.data;
  }
}
