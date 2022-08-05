import { AxiosResponse } from "axios";
import {
  SearchMovies,
  SearchMovies_Params,
  MovieChanges,
  MovieChanges_Params,
  TVChanges,
  TVChanges_Params,
  SearchTV,
  SearchTV_Params,
} from "./types";
import { Requestor } from "./lib/Requestor";

export default class Client {
  private _requestor: Requestor;

  constructor(
    apiKey: string,
    apiBase: string = "https://api.themoviedb.org/3"
  ) {
    this._requestor = new Requestor(apiBase, apiKey);
  }

  /**
   * Search for a TV show.
   *
   * @param {SearchTV_Params} params
   * - language - Pass a ISO 639-1 value to display translated data for the fields that support it.
   * - page - Specify which page to query.
   * - query - Pass a text query to search. This value should be URI encoded.
   * - include_adult - Choose whether to inlcude adult (pornography) content in the results.
   * - first_air_date_year
   *
   * @returns {Promise<AxiosResponse<SearchTV, SearchTV>>}
   */
  searchTV = (
    params: SearchTV_Params
  ): Promise<AxiosResponse<SearchTV, SearchTV>> =>
    this._requestor.makeRequest<SearchTV_Params, SearchTV>("get", "search/tv", {
      ...params,
    });

  /**
   * Search for movies.
   *
   * @param {SearchMovies_Params} params
   * - language - Pass a ISO 639-1 value to display translated data for the fields that support it.
   * - query - Pass a text query to search. This value should be URI encoded.
   * - page - Specify which page to query.
   * - include_adult - Choose whether to include adult (pornography) content in the results.
   * - region - Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
   * - year
   * - primary_release_year
   *
   * @returns {Promise<AxiosResponse<SearchMovies, SearchMovies>>}
   */
  searchMovies = (
    params: SearchMovies_Params
  ): Promise<AxiosResponse<SearchMovies, SearchMovies>> =>
    this._requestor.makeRequest<SearchMovies_Params, SearchMovies>(
      "get",
      "search/movie",
      { ...params }
    );

  /**
   * Get a list of all of the TV show ids that have been changed in the past 24 hours.
   *
   * @see https://developers.themoviedb.org/3/changes/get-tv-change-list
   *
   * @param {TVChanges_Params} params
   * - start_date - Filter the results with a start date.
   * - end_date - Filter the results with a end date.
   *
   * @returns {Promise<AxiosResponse<TVChanges, TVChanges>>}
   */
  tvChanges = (
    params?: TVChanges_Params
  ): Promise<AxiosResponse<TVChanges, TVChanges>> =>
    this._requestor.makeRequest<TVChanges_Params, TVChanges>(
      "get",
      "tv/changes",
      { ...params }
    );

  /**
   * Get a list of all of the movie ids that have been changed in the past 24 hours.
   *
   * @see https://developers.themoviedb.org/3/changes/get-movie-change-list
   *
   * @param {MovieChanges_Params} params
   * - start_date - Filter the results with a start date.
   * - end_date - Filter the results with a end date.
   *
   * @returns {Promise<AxiosResponse<MovieChanges, MovieChanges>>}
   */
  movieChanges = (
    params?: MovieChanges_Params
  ): Promise<AxiosResponse<MovieChanges, MovieChanges>> =>
    this._requestor.makeRequest<MovieChanges_Params, MovieChanges>(
      "get",
      "movie/changes",
      { ...params }
    );
}
