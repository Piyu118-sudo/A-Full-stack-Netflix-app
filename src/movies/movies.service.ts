import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
    constructor(private prisma: PrismaService) { }

    create(data: any) {
        return this.prisma.movie.create({ data });
    }

    findAll() {
        return this.prisma.movie.findMany();
    }

    findOne(id: number) {
        return this.prisma.movie.findUnique({
            where: { id },
        });
    }

    addToWatchlist(userId: number, movieId: number) {
        return this.prisma.watchlist.create({
            data: {
                userId,
                movieId,
            },
        });
    }
}



