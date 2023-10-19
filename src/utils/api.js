import axios from "axios";

// const BASE_URL = "https://reqres.in/api/";
const BASE_URL = "";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    // Authorization: "bearer " + TMDB_TOKEN,
    mode: 'no-cors',
    method: 'GET'
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};