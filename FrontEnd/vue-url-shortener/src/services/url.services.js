import axios from "axios";

const urlService = {};

urlService.shortenAndPostUrl = async (url) => {
  return axios
    .post(`/api/url`, url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

urlService.getShortenedUrl = async (shortUrlId) => {
  return axios
    .get(`/api/${shortUrlId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default urlService;
