import { InnType } from '../types/inntype';
import { Ciudad } from '../types/ciudad';
import { Gallery } from './gallery';
import { InnService } from './innservice';
import { InnLocation } from './innlocation';
import { Review } from './review';
import { HostUser } from './hostuser';

export class Inn {
    id: number;
    hostUser: HostUser;
    name: string;
    description: string;
    city: Ciudad;
    imgs: string[];
    galleriesImgs: Gallery[];
    rating: number;
    ratingQty: number;
    price: number;
    rooms: number;
    bathrooms: number;
    capacity: number;
    beds: number;
    innType: InnType;
    innServices: InnService[];
    locationCoor: InnLocation;
    locationDescr: string;
    reviews: Review[];
}
