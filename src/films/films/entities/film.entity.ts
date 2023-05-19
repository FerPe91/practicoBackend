export class Film {

    id:string
    tittle:string
    actors=[]
    genero=[]
    sipnosis:string
    imgUrl:string
    duration:string
    year:string

    constructor(id:string, tittle:string, actors=[], genero=[],
        sipnosis:string, imgUrl:string,duration:string, year:string){
        this.id=id
        this.tittle=tittle
        this.actors=actors
        this.genero=genero
        this.sipnosis=sipnosis
        this.imgUrl=imgUrl
        this.duration=duration
        this.year=year
    }

    getTittle():string{
        return this.tittle
    }


    setTittle(newTittle:string):void{
        this.tittle=newTittle
    }

    setYear(newYear:string):void{
        this.year=newYear
    }
    setActors(newActors=[]):void{
        this.actors=newActors
    }
    
    setGenero(newGenero=[]):void{
        this.genero=newGenero
    }

    setSipnosis(newSipnosis:string) :void{
        this.sipnosis=newSipnosis
    }

    setDuration(newDuration:string){
        this.duration=newDuration
    }

    setUrl(newImgUrl:string):void{
        this.imgUrl=newImgUrl
    }

}
