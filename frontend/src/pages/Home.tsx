import { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    SimpleGrid,
    Spinner,
    Center,
    useToast,
    Input,
} from '@chakra-ui/react';
import { fetchMovies } from '../services/movieService';
import type { Movie } from '../types/movies';
import MovieCard from '../components/MovieCard';
import { addToWatchlist } from '../services/watchlistService';

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const toast = useToast();

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
    );

    useEffect(() => {
        fetchMovies()
            .then(setMovies)
            .catch(() => {
                toast({
                    title: 'Error',
                    description: 'Failed to fetch movies',
                    status: 'error',
                });
            })
            .finally(() => setLoading(false));
    }, [toast]);

    const handleAddToWatchlist = async (movieId: string) => {
        try {
            await addToWatchlist(movieId);
            toast({
                title: 'Added to Watchlist',
                description: 'Movie added to your watchlist',
                status: 'success',
            });
        } catch {
            toast({
                title: 'Error',
                description: 'Please login first',
                status: 'error',
            });
        }
    };

    if (loading) {
        return (
            <Center h="100vh">
                <Spinner
                    size="xl"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="red.500"
                />
            </Center>
        );
    }

    return (
        <Box p={6}>
            <Heading mb={4}>Movies</Heading>

            <Input
                mb={6}
                placeholder="Search movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {filteredMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onAddToWatchlist={handleAddToWatchlist}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Home;
