import axios from 'axios';
import { apiKey, accountXuid } from './config';
const url = "https://xboxapi.com/v2";

export const fetchGamerTag = async query => {
    const { data } = await axios.get(`${url}/${accountXuid}/profile`, {
        headers: {
            "X-AUTH": apiKey,
            Accept: "application/json"
          }
    });
    return data;
}