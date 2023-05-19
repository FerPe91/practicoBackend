import { Injectable, NotFoundException } from '@nestjs/common';
import { Film } from './entities/film.entity';
import { v4 } from 'uuid';
import { CreateFilmDto } from './dto/create-film.dto';
import { identity } from 'rxjs';

@Injectable()
export class FilmsService {

  private newFilm23 : Film= new Film("1","Fury",["Brad pitt"],["Accion", "war"],"Commanded by the veteran Sergeant Wardaddy, a brigade of five American soldiers aboard a tank, fight against a Nazi army on the brink of despair since the Germans knew that their defeat was already sung at that time.","https://www.ecartelera.com/carteles/6400/6406/003_m.jpg","2h 14m","2014")
  private filmsArray : Film[] = [this.newFilm23]

  getAllFilms(){
    return this.filmsArray
  }

  getFilmsById(id:string){
    const film = this.filmsArray.find((film) => film.id === id);
    if (!film) {
      // devolver una exception
      throw new NotFoundException();
    }
    return film;
  }

  createFilm(CreateFilmDto: CreateFilmDto) {

    const newFilm : Film= new Film(
    v4(),
    CreateFilmDto.tittle,
    CreateFilmDto.actors,
    CreateFilmDto.genero,
    CreateFilmDto.sipnosis,
    CreateFilmDto.imgUrl,
    CreateFilmDto.duration,
    CreateFilmDto.year
    )
    this.filmsArray.push(newFilm)      
    return newFilm
  }

  update(id: string,newFilm:any):string {
    let index = this.filmsArray.findIndex(film =>film.id==id)

    if(index != -1){
      let filmExist = this.filmsArray[index]
      filmExist.setTittle(newFilm.tittle)
      filmExist.setActors(newFilm.actors)
      filmExist.setGenero(newFilm.genero)
      filmExist.setSipnosis(newFilm.sipnosis)
      filmExist.setUrl(newFilm.imgUrl)
      filmExist.setDuration(newFilm.duration)
      filmExist.setYear(newFilm.year)
      return "ok"
    }return "Error 404 No se encuentran datos"
  } 

  remove(id:string){
    let filmToDelete = this.filmsArray.find(film => film.id === id); // Encuentra el elemento a eliminar
  
    this.filmsArray = this.filmsArray.filter(film => film.id !== id); // Elimina el elemento de la lista
    

    if(filmToDelete){
      return "Eliminaste: " + filmToDelete.tittle; // Devuelve el nombre del elemento eliminado
    }
    return "No se encontro id para eliminar, faltan datos (id)"



    
  }
  




}

function uuid(): string {
  throw new Error('Function not implemented. ');
}
