const API_URL = 'http://localhost:3000';

export const addToWatchlist = async (movieId: string) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}/watchlist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify({ movieId })
    });
    if (!response.ok) {
        throw new Error('Failed to add to watchlist');
    }
    return response.json();
};

export const getWatchlist = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/watchlist`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch watchlist');
    }
    return response.json();
};  