import { To } from './to';

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
    // to: To;

    constructor(id?: number, name?: string, 
        duration?: number, departureDate?: string) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.departureDate = departureDate;
    }
}