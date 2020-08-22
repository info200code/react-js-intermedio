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
        Authorization: `Bearer ${token}`,
      },
    });

    return axiosInstance;
  }

  async getUser() {
    const res = await this.axios.get("/me");
    return res.data;
  }

  async getPlaylists() {
    const res = await this.axios.get("/me/playlists");
    return res.data;
  }

  async getPlaylistByUser(user, playlistId) {
    const res = await this.axios.get(`/users/${user}/playlists/${playlistId}`);
    return res.data;
  }

  async getTracksByUser(user, playlistId) {
    const res = await this.axios.get(
      `/users/${user}/playlists/${playlistId}/tracks`
    );
    return res.data;
  }
}
