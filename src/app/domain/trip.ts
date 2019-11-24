import { To } from './to';
import { Catering } from './catering.enum';

export class Trip {
    id: number;
    name: string;
    duration: number;
    departureDate: string;
    // departureDate: Date;
    returnDate: string;
    adultsPrice: number;
    kidsPrice: number;
    promoted: boolean;
    adultPlacesAvailable: number;
    childPlacesAvailable: number;
    catering: Catering;
    // to: To;

    constructor(id?: number, name?: string, 
        duration?: number, departureDate?: string) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.departureDate = departureDate;
    }
}