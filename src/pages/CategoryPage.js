import { useState, useEffect } from "react";
import { fetchContent } from "../services/useFetch";
import MovieCard from "../components/MovieCard";
import HeaderLabel from "../components/HeaderLabel";

const CategoryPage = (props) => {
  const categoryMapper = {
    tv: "shows",
    movie: "movies",
  };

  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    fetchContent(`discover/${props.categoryType}`, {
      sort_by: "vote_count.desc",
    }).then((result) => setContentList(result.data.results));
  }, [props.categoryType]);

  return (
    <div className='h-screen mt-3 overflow-auto pb-48 scrollbar-hide'>
      <HeaderLabel>
        Discover the most popular {categoryMapper[props.categoryType]}:
      </HeaderLabel>
      <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-12'>
        {contentList.map((movie, index) => {
          return <MovieCard movieData={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
