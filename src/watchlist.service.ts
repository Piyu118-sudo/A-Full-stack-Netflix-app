import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service'

@Injectable()
export class WatchlistService {
    constructor(private prisma: PrismaService) { }
    
    addToWatchlist(userId: number, movieId: number) {
        return this.prisma.watchlist.create({
            data: {
                userId,
                movieId,
            },
        });

    }
    getWatchlist(userId: number) {
        return this.prisma.watchlist.findMany({
            where: { userId },
        });
    }
}