import {API} from "../api/aconf.ts";

export const requestApi = (api: API) => {
    fetch(api.url, {
        method: api.method,
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}