import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { MoviesModule } from "./movies/movies.module";
import { UsersModule } from "./users/users.module";
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile,module';
@Module({
    imports: [AuthModule, MoviesModule, UsersModule,ProfileModule],
})
export class AppModule {}