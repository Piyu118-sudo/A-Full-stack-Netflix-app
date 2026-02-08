import type { Movie } from '../types/movies';

export const fetchMovies = async (): Promise<Movie[]> => {
    const token = localStorage.getItem('token');

    const res = await fetch('http://localhost:3000/movies', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch movies');
    }
    return res.json();
};