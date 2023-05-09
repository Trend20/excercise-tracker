import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { login } from "../features/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  // login
  const login = (event) =>{
    event.preventDefault();
    const newUser = { email, password};
    if(email !== '' && password !== ''){
      dispatch(login(newUser));
      navigate('/tasks');
      console.log(newUser);
    }else{
      alert('Please Add your details to login');
    }
  }

  return (
    <form
      onSubmit={login}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "200px",
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
          height: "350px",
        }}
      >
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <TextField
            id="outlined-basic"
            sx={{ width: "100%" }}
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
        <Box sx={{ marginTop: "20px" }}>
          <Typography>
            New here? <Link to="/auth/signup">Create Account</Link>{" "}
          </Typography>
        </Box>
        <Button variant="contained" sx={{ marginTop: "30px" }} type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
