import { Controller, Get, Post, Body, Put, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { Film } from './entities/film.entity';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  
  @Get()
  getAllFilms(){
    return this.filmsService.getAllFilms()
  }
  
  @Get(':id')
  getFilmsById(@Param("id", ParseUUIDPipe)
  id: string,): Film {
    return this.filmsService.getFilmsById(id);
  }
   
  
  @Post()
  createVehiculo(@Body() createFilmDto: CreateFilmDto){ //crear dto
    return this.filmsService.createFilm(createFilmDto)
  }

  @Put(":id")
  putFilm(@Body()film: CreateFilmDto, @Param('id') id: string) : string {
    return this.filmsService.update(id, film);
  }

  @Delete(':id')
  removeFilm(@Param('id') id: string) {
    return this.filmsService.remove(id);
  } 


}
