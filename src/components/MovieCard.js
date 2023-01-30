const MovieCard = (props) => {
  return (
    <div className='h-81 w-60 rounded-xl border-2 border-white border-opacity-60 bg-white bg-opacity-30'>
      <img
        className='h-74 w-60 rounded-t-xl object-cover'
        src={`https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`}
        alt='Movie'
      />
      <div className='grid grid-cols-4 h-16 w-60 items-center px-1 justify-items-center'>
        <div className='col-span-3 max-w-[230px] font-semibold text-white text-sm text-center line-clamp-2'>
          {props.movieData.title ?? props.movieData.name}
        </div>
        <div className='flex h-10 w-10 rounded-xl border-2 border-white border-opacity-60 bg-white bg-opacity-30 text-center text-white text-2xl items-center justify-center'>
          {props.movieData.vote_average * 10}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
