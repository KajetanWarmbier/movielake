export const getTodaysDate = () => {
  return new Date().toISOString().slice(0, 10);
};

export const getStartDateOfAiringMovies = () => {
  const today = new Date();
  const fiveWeeksAgo = new Date(new Date().setDate(today.getDate() - 35));
  return fiveWeeksAgo.toISOString().slice(0, 10);
};
