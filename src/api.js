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
    // console.log(data);
}

export const fetch360Games = async query => {
    const { data } = await axios.get(`${url}/${accountXuid}/xbox360games`, {
        headers: {
            "X-AUTH": apiKey,
            Accept: "application/json"
          }
    });
    // return data;
    console.log(data, '360games');
}

export const fetchXB1Games = async query => {
    const { data } = await axios.get(`${url}/${accountXuid}/xboxonegames`, {
        headers: {
            "X-AUTH": apiKey,
            Accept: "application/json"
          }
    });
    return data;
    // console.log(data, 'xbox one games');
}