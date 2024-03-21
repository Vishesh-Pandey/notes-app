import axios from "axios";
import { useEffect, useState } from "react";
import Note from "../components/Note";
import { Button, Container, Grid, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [fetchingNotes, setFetchingNotes] = useState<boolean>(true);

  async function getNotes() {
    setFetchingNotes(true);
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/api/v1/note/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setNotes(response.data);
    setFetchingNotes(false);
  }
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <Navbar />
      {notes.length === 0 ? (
        <Grid container>
          <Typography margin="auto" py={10}>
            Notes you add appear here
          </Typography>
        </Grid>
      ) : null}
      <Container>
        <Grid container spacing={2} xs={12}>
          {notes.map((element) => {
            return (
              <Grid xs={12} md={6} lg={4}>
                <Note notes={element} />
              </Grid>
            );
          })}
        </Grid>

        <Grid textAlign="center">
          <Button loading={fetchingNotes} onClick={getNotes}>
            Refresh
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
