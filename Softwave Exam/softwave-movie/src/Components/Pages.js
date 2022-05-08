import { Button, Box, Stack, Pagination } from "@mui/material";

export default function Pages({ moviesPerPage, totalMovies, onChange }, props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack spacing={2} mt={2} mb={2}>
      <Pagination
        count={totalMovies % 10 === 0 ? totalMovies / 10 : totalMovies / 10 + 1}
        color="primary"
        onChange={onChange}
        page={props.page}
      />
    </Stack>
  );
}
