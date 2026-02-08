import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const MovieSkeleton = () => {
    return (
        <Box p={3} borderRadius="lg" bg="gray.700">
            <Skeleton height="180px" mb={4} />
            <SkeletonText noOfLines={2} spacing="4" />
        </Box>
    );
};
export default MovieSkeleton;