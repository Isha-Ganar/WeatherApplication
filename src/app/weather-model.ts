export class WeatherModel
{
    id:number;
    location : string;
    temperature : number;
    atmosphericPressure : number;
    humidity : number;
    precipitation : number;
    solarradiation : number;
    wind : number;

    constructor()
    {
        this.id=0;
        this.location='';
        this.temperature=0;
        this.atmosphericPressure=0;
        this.humidity=0;
        this.precipitation=0;
        this.solarradiation=0;
        this.wind=0;
    }

}
