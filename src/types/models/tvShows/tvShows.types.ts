import { MovieShape } from "../movies/movieTypes";

export interface TvShowShape extends Partial<MovieShape> {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
    belongs_to_collection: null | string;
    status: string;
    episode_run_time: number[];
    in_production: boolean;
    last_air_date: string;
    last_episode_to_air: {};
    number_of_episodes: number;
    number_of_seasons: number;
    seasons: any[];
    type: string;
}