import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Spinner = () => {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default Spinner;
