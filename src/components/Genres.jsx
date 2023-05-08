import { Typography } from "@mui/material";

export function Genres(genres) {
  const genresCategories= genres.genres;
  const formattedGenres = genresCategories?.map(
    (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
  );
  const genresString = formattedGenres?.join(", ");

  return (
    <Typography gutterBottom color="white" fontSize="sm" component="div">
      {genresString}
    </Typography>
  );
}
