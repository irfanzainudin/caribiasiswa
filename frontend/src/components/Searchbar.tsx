import TextField from "@mui/material/TextField";

const Searchbar = () => {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 sm:px-0">
      <TextField
        label="Search"
        variant="outlined"
        size="small" // Makes the TextField smaller for a compact look
        fullWidth
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
