import { ReviewUser } from './revieweruser';

export class Review {
    id: number;
    title: string;
    user: ReviewUser;
    text: string;
    rating: number;
    fecha: string;
}
