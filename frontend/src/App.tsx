import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Box } from "@mui/joy";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Box sx={{ bgcolor: "WindowText", height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
