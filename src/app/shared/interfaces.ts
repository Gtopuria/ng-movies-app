import { GenreType } from './genre-type';

export interface IMovie {
    id: number;
    key: string;
    description: string;
    genres: GenreType[];
    rate: string;
    length: string;
    img: string;

}
