import TextField from "@mui/material/TextField";

const Searchbar = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3">
      <TextField
        label="Search"
        variant="outlined"
        size="small" // Makes the TextField smaller
        fullWidth
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
