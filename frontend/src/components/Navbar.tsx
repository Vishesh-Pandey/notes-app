import { Box, Button, Grid, Input, Typography } from "@mui/joy";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <Box>
        <Grid p={2} container sx={{ flexGrow: 1 }}>
          <Grid xs={2}>
            <Typography>Notes App</Typography>
          </Grid>
          <Grid xs={4}>
            <Input placeholder="Search Notes" />
          </Grid>
          <Grid px={4} xs={2}>
            <AddNote />
          </Grid>
          <Grid px={4} display="flex" justifyContent="end" xs={2}></Grid>
          <Grid display="flex" justifyContent="end" xs={2}>
            <Button
              onClick={function () {
                localStorage.setItem("token", "");
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Navbar;
