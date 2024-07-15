import TextField from "@mui/material/TextField";

function SearchBar({ username, handleSearch, handleUserInput }) {
  return (
    <form onSubmit={handleSearch}>
      <TextField
        id="outlined-basic"
        label="Search username"
        variant="outlined"
        value={username}
        onChange={handleUserInput}
        margin="normal"
        className="custom-searchbar"
      />
    </form>
  );
}

export default SearchBar;
