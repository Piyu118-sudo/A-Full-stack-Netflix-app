import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const MovieDetails = () => {
    const { id } = useParams();

    return (
        <Box p={6} >
            <Heading mb={4}>Movie #{id}</Heading>
            <Text fontSize="lg">
                Detailed information about the movie will be displayed here.
            </Text>
        </Box>
    );
};
export default MovieDetails;