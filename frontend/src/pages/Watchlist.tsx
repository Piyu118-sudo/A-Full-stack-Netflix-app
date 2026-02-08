import { useEffect, useState } from 'react';
import { Box, Heading, Text, Spinner, Center } from '@chakra-ui/react';
import { getWatchlist } from '../services/watchlistService';

interface WatchlistItem {
    id: number;
    movie: {
        title: string;
    };
}

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWatchlist()
            .then(setWatchlist)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Center h="100vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    return (
        <Box p={4}>
            <Heading mb={4}>My Watchlist</Heading>

            {watchlist.length === 0 ? (
                <Text>No movies in your watchlist</Text>
            ) : (
                watchlist.map((item) => (
                    <Box
                        key={item.id}
                        p={3}
                        bg="gray.700"
                        color="white"
                        mb={2}
                        borderRadius="md"
                    >
                        {item.movie.title}
                    </Box>
                ))
            )}
        </Box>
    );
};

export default Watchlist;
