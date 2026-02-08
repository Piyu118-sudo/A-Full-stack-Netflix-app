import { Box, Text } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
interface MovieCardProps {
    movie: {
        id:number
        title: string;
    };
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const navigate = useNavigate();
    return (
        <Box onClick={() => navigate(`/movie/${movie.id}`)} p={4} borderRadius="lg" bg="gray.700" color="white" cursor="pointer" transition="transform 0.3s" _hover={{ transform: 'scale(1.05)', bg: 'gray.600' }}
        >
            <Text fontSize="xl" fontWeight="bold">{movie.title}</Text>
        </Box>
    );

};
export default MovieCard;