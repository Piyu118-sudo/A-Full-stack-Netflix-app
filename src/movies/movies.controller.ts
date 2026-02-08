import {
    Controller,
    Get,
    Post,
    Body,
    UseGuards,
    Req,
    Param,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Post()
    create(@Body() body: any) {
        return this.moviesService.create(body);
    }

    @Get()
    findAll() {
        return this.moviesService.findAll();
    }

    @Post(':id/watchlist')
    addToWatchlist(
        @Req() req: any,
        @Param('id') movieId: string,
    ) {
        return this.moviesService.addToWatchlist(
            req.user.id,
            Number(movieId),
        );
    }
}


