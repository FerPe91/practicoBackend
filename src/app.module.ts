import { Module } from '@nestjs/common';
import{ ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FilmsModule } from './films/films/films.module';
import { FilmsController } from './films/films/films.controller';
import { FilmsService } from './films/films/films.service';

@Module({
  imports: [FilmsModule,ServeStaticModule.forRoot({ rootPath: join(__dirname, '..','client')})],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class AppModule {}
