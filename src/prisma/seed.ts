import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.movie.createMany({
        data: [
            { title: 'Inception', genre: 'Sci-Fi' },
            { title: 'The Dark Knight', genre: 'Action' },
            { title: 'Interstellar', genre: 'Sci-Fi' },
        ],
    });

    console.log('Database seeded');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
