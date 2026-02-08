import { Controller, Get, Post, Body, Req, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { WatchlistService } from './watchlist.service';

@Controller('watchlist')
@UseGuards(JwtAuthGuard)
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService) { }

    @Post()
    addToWatchlist(@Req() req: Request, @Body('movieId') movieId: string) {
        return this.watchlistService.addToWatchlist(
            req.user.id,
            movieId,
        );
    }

    @Get()
    getWatchlist(@Req() req: Request) {
        return this.watchlistService.getWatchlist(
            req.user.email,
        );
    }
}
