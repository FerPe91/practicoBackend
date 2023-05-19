import { IsString, IsArray, IsNotEmpty} from 'class-validator';

export class CreateFilmDto {
    id:string

    @IsString()
    @IsNotEmpty()
    tittle:string

    @IsArray()
    actors=[]

    @IsArray()
    genero=[]

    @IsString()
    sipnosis:string

    @IsString()
    imgUrl:string

    @IsString()
    duration:string

    @IsString()
    year:string
}
