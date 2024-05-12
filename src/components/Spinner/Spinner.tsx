import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Spinner = () => {
  return (
    <Stack spacing={5} direction="row">
      <CircularProgress color="secondary" size={84} />
    </Stack>
  );
};

export default Spinner;
