import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "150px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid grey",
          padding: "20px",
          width: "20%",
          borderRadius: "5px",
          height: "400px",
        }}
      >
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <TextField
            id="outlined-basic"
            sx={{ width: "100%" }}
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <TextField
            id="outlined-basic"
            sx={{ width: "100%" }}
            label="Username"
            variant="outlined"
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Button variant="contained" sx={{ marginTop: "50px" }}>
          Sign up
        </Button>
      </Box>
    </form>
  );
};

export default Register;
