import apiKey from "../config";
import accountXuid from "../config";
import axios from 'axios';
const url = "https://xboxapi.com/v2/";

export const fetchGamercard = async query => {
    const { data } = await axios.get(`${url}/${accountXuid}/gamercard`, {
        headers: {
            "user-key": apiKey,
            Accept: "application/json"
          }
    });
    return data;
}