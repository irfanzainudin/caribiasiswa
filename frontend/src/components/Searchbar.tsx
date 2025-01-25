import TextField from "@mui/material/TextField";

const Searchbar = () => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default Searchbar;
