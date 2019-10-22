import { InnType } from '../types/inntype';
import { Ciudad } from '../types/ciudad';
import { Gallery } from './gallery';

export class Inn {
    id: number;
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
}
