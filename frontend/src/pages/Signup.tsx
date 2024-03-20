import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

export default function Signup() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/api/v1/user/signup",
      data: {
        username,
        password,
      },
    });
    window.localStorage.setItem("token", response.data);
    navigate("/dashboard");
  };

  return (
    <main>
      <ModeToggle />
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            value={username}
            onChange={function (e) {
              setUsername(e.target.value);
            }}
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={function (e) {
              setPassword(e.target.value);
            }}
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button onClick={handleSignup} sx={{ mt: 1 /* margin top */ }}>
          Signup
        </Button>
        <Typography
          endDecorator={<Link href="/login">Login</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  );
}
