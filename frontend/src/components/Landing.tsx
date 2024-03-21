import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <Typography level="h1">Notes App</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Just A Project using Following Technologies
      </Typography>
      <Typography></Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          "& > *": { minWidth: 0, flexBasis: 200 },
        }}
      >
        <List
          size="lg"
          variant="outlined"
          sx={{
            borderRadius: "sm",
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator></ListItemDecorator>
              Technologies
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>MUI</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>React </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Express </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>TypeScript </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Prisma</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Postgres</ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Link to={"/sign-up"}>
          <Button>Visit</Button>
        </Link>
        <a target="_blank" href="https://github.com/Vishesh-Pandey/notes-app">
          Github
        </a>
      </Box>
    </Card>
  );
}
