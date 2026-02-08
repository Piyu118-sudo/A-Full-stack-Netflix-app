import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
    @UseGuards(JwtAuthGuard)
        
    @Get()
        
    getProfile(@Req() req: Request) {
        return {
            message: 'protected route accessed', 
            user: req.user,
        };
    }
}
