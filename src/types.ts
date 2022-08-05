/***********************/
/**** Request error ****/
/***********************/
export type RequestError = {
    status_message?: string,
    status_code?: number,
    success?: boolean
}

/************************/
/******** Search ********/
/************************/
type TVSearchResults = {
    poster_path?: string | null,
    popularity?: number,
    id?: number,
    backdrop_path?: string | null,
    vote_average?: number,
    overview?: string,
    first_air_date?: string,
    origin_country?: string[],
    genre_ids?: number[],
    original_language?: string,
    vote_count?: number,
    name?: string,
    original_name?: string
}

type MovieSearchResults = {
    poster_path?: string | null,
    adult?: boolean,
    overview?: string,
    release_date?: string,
    genre_ids?: number[],
    id?: number,
    original_title?: string,
    original_language?: string,
    title?: string,
    backdrop_path?: string | null,
    popularity?: number,
    vote_count?: number,
    video?: boolean,
    vote_average?: number
}

export type SearchTV = {
    page?: number,
    results?: TVSearchResults[],
    total_results?: number,
    total_pages?: number
}

export type SearchTV_Params = {
    language?: string,
    page?: number,
    query: string,
    include_adult?: number,
    first_air_date_year?: number
}

export type SearchMovies = {
    page?: number,
    results?: MovieSearchResults[],
    total_results?: number,
    total_pages?: number
}

export type SearchMovies_Params = {
    language?: string,
    query: string,
    page?: number,
    include_adult?: boolean,
    region?: string,
    year?: number,
    primary_release_year?: number
}

/*****************/
/**** Changes ****/
/*****************/
type ChangeResult = {
    id: number,
    adult: boolean
}

export type TVChanges = {
    results: ChangeResult[],
    page: number,
    total_pages: number,
    total_results: number
}

export type TVChanges_Params = {
    start_date?: string,
    end_date?: string
}

export type MovieChanges = {
    results: ChangeResult[],
    page: number,
    total_pages: number,
    total_results: number
}

export type MovieChanges_Params = {
    start_date?: string,
    end_date?: string
}