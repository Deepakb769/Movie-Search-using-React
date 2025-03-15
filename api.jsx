import axios from 'axios'

const BASE_URL = "http://localhost:2000/movies"

export const fetchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
};

export const addMovie = async (movie) => {
    const response = await axios.post(BASE_URL, movie);
    return response.data;
};