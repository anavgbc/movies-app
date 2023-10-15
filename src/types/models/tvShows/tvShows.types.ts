import { MovieShape } from "../movies/movieTypes";

export interface TvShowShape extends Partial<MovieShape> {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}