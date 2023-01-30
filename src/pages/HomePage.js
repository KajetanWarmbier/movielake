import { useState, useEffect } from "react";
import { fetchContent } from "../services/useFetch";
import MovieCard from "../components/MovieCard";
import HeaderLabel from "../components/HeaderLabel";
import { getTodaysDate, getStartDateOfAiringMovies } from "../utils/date";

const HomePage = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);

  useEffect(() => {
    fetchContent("discover/movie", {
      sort_by: "vote_count.desc",
      "primary_release_date.gte": getStartDateOfAiringMovies(),
      "primary_release_date.lte": getTodaysDate(),
    }).then((result) => setPopularMoviesList(result.data.results));
  }, []);

  return (
    <div className='h-screen mt-3 overflow-auto pb-48 scrollbar-hide'>
      <HeaderLabel>Discover airing movies:</HeaderLabel>
      <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-12'>
        {popularMoviesList.map((movie, index) => {
          return <MovieCard movieData={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
